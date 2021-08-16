const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
    },
    address: String,
    active: Boolean,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
