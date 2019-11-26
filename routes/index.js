var express = require('express');
var router = express.Router();
var devicesService = require('../services/devicesService');

/* GET home page. */
router.get('/', function(req, res, next) {
  var sensors = devicesService.getSensors();
  var actuators = devicesService.getActuators();

  res.render('index', { sensors: sensors, actuators: actuators });
});

router.put('/atualiza', function(req, res, next) {
  var actuatorId = req.body.id;

  devicesService.updateStatus(actuatorId);

  res.redirect('/index');
});

module.exports = router;
