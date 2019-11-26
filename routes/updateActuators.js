var express = require('express');
var router = express.Router();
var devicesService = require('../services/devicesService');

router.post('/update', function(req, res, next) {
  actuators = devicesService.getActuators;
  
  var actuatorId = req.body.actuatorId;

  devicesService.updateStatus(actuatorId);

  res.redirect(req.get('referer'));
});

module.exports = router;