var express = require('express');
var router = express.Router();
var devicesService = require('../services/devicesService');

/* GET home page. */
router.get('/', function(req, res, next) {
  var sensors = devicesService.getSensors();
  var actuators = devicesService.getActuators();

  res.render('aplicacao', { title: 'SmartHome', msg: '',sensors: sensors, actuators: actuators });
});

module.exports = router;
