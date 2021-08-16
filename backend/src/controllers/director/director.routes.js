const express = require("express");
const directorModel = require('../../models/director.model');
const controller = require('../base/controller')(directorModel);

const router = express.Router();

// create
router.post('/', (req, res, next) => {
  return controller.create(req, res, next);
});

// read
router.get('/', (req, res, next) => {
  return controller.findAll(req, res, next);
});

router.get('/:id', (req, res, next) => {
  return controller.findOne(req, res, next);
});

// update
router.put('/:id', (req, res, next) => {
  return controller.update(req, res, next);
});
router.patch('/:id', (req, res, next) => {
  return controller.update(req, res, next);
});

// delete
router.delete('/:id', (req, res, next) => {
  return controller.delete(req, res, next);
});

module.exports = router;
