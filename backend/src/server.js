const express = require('express');
const config = require('config');
const logger = require('./config/logger');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const mongoose = require('mongoose');
const cors = require('./config/cors');
mongoose.Promise = global.Promise;
const fsp = require('fs').promises;

// Authenctication.
const authenticateJwt = require('./auth/authenticate');
const adminOnly = require('./auth/adminOnly');
const authHandler = require('./auth/authHandler');

const swaggerDocument = YAML.load('./docs/swager.yaml');

const { username, password, host } = config.get('database');
mongoose
    .connect(`mongodb://${host}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        require('./seed/seeder');
        logger.info('MongoDB connection has been established successfully.')
    })
    .catch(err => {
        logger.error(err);
        process.exit();
    });


app.use(cors());
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.static('public'));
app.use(bodyParser.json());

// Router.
app.post('/login', authHandler.login);
app.post('/refresh', authHandler.refresh);
app.post('/logout', authHandler.logout);

app.use('/users', authenticateJwt, adminOnly, require('./controllers/user/user.routes'));
app.use('/movies', authenticateJwt, adminOnly, require('./controllers/movie/movie.routes'));
app.use('/directors', authenticateJwt, adminOnly, require('./controllers/director/director.routes'));
app.use('/actors', authenticateJwt, adminOnly, require('./controllers/actor/actor.routes'));
app.use('/ratings', authenticateJwt, adminOnly, require('./controllers/rating/rating.routes'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use((err, req, res, next) => {
    res.status(err.statusCode);
    res.json({
        hasError: true,
        message: err.message
    });
});

module.exports = app;
