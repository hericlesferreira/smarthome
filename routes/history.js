var express = require('express');
var router = express.Router();
var devicesService = require('../services/devicesService');

/* GET home page. */
router.get('/', function(req, res, next) {
  var sensors = devicesService.getSensors();
  var actuators = devicesService.getActuators();

  res.render('history', { title: 'SmartHome', sensors: sensors, actuators: actuators });
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;

  var sensors = devicesService.getSensors();

  var sensor = sensors.filter((sensor) => sensor.id == id)[0];

  res.render('logId', { title: 'SmartHome', sensor: sensor });
});

module.exports = router;
