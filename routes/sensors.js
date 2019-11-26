var express = require('express');
var router = express.Router();
var devicesService = require('../services/devicesService');

router.post('/:id/add', function(req, res, next) {
  var sensorId = req.params.id;
  var temperature = req.body.temperature;
  var humidity = req.body.humidity;

  devicesService.addMeasurement(sensorId, temperature, humidity)
  res.sendStatus(200);
});

module.exports = router;
