var express = require('express');
var router = express.Router();
var devicesService = require('../services/devicesService');

router.get('/actuator', function (req, res, next) {

  res.render('cadActuators');
});

router.post('/createActuator', function(req, res, next) {
  var actuators = devicesService.getActuators();

  var newId = actuators.length + 1;

  var newActuator = {};
  newActuator.id = newId;
  newActuator.name = req.body.name;
  newActuator.status = 0;
  
  devicesService.saveActuators(newActuator);

  res.redirect('/application');
});

router.get('/sensor', function (req, res, next) {

  res.render('cadSensors');
});

router.post('/createSensor', function(req, res, next) {
  var sensors = devicesService.getSensors();

  var newId = sensors.length + 1;

  var newSensor = {};
  newSensor.id = newId;
  newSensor.name = req.body.name;
  newSensor.measurements = [];
  newSensor.measurements[0] = {"date": 0, "temperature": 0, "humidity": 0};
  
  devicesService.saveSensors(newSensor);

  res.redirect('/application');
});

module.exports = router;