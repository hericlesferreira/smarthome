var fs = require('fs');

var temperatureSensorsFilePath = 'db/temp_sensors.json';
var actuatorsFilePath = 'db/actuators.json';

var loadFileTemperatureSensors = function() {
  var fileData = fs.readFileSync(temperatureSensorsFilePath, 'utf8');
  var sensors = JSON.parse(fileData);

  return sensors;
}

var loadFileActuators = function() {
  var fileData = fs.readFileSync(actuatorsFilePath, 'utf8');
  var actuators = JSON.parse(fileData);

  return actuators;
}

var saveFileSensors = function(sensors) {
  var data = JSON.stringify(sensors);
  fs.writeFileSync(temperatureSensorsFilePath, data, 'utf8');
}

var saveFileActuators = function(actuators) {
  var data = JSON.stringify(actuators);
  fs.writeFileSync(actuatorsFilePath, data, 'utf8');
}

var saveFileTemperatureSensors = function(sensors) {
  var data = JSON.stringify(sensors);
  fs.writeFileSync(temperatureSensorsFilePath, data, 'utf8');
}

var getSensors = function() {
  var sensors = loadFileTemperatureSensors();
  return sensors;
}

var getActuators = function() {
  var actuators = loadFileActuators();
  return actuators;
}

var addMeasurement = function(sensorId, temperature, humidity) {
  var sensors = loadFileTemperatureSensors();

  var selectedSensor = sensors.find((sensor) => sensor.id == sensorId);

  var measurementData = {
    "date": new Date().toLocaleString(),
    "temperature": temperature,
    "humidity": humidity,
  };

  selectedSensor.measurements.push(measurementData);

  saveFileTemperatureSensors(sensors);
}

var updateStatus = function(actuatorId) {
  var actuators = loadFileActuators();

  var actuator = actuators.find((actuator) => actuator.id == actuatorId);

  if (actuator.status === 1) {
    actuator.status = 0;
  } else {
    actuator.status = 1;
  }

  saveFileActuators(actuators);
}

var saveActuators = function(newActuator) {
  var actuators = loadFileActuators();

  actuators.push(newActuator);
  saveFileActuators(actuators);
}

var saveSensors = function(newSensor) {
  var sensors = loadFileTemperatureSensors();

  sensors.push(newSensor);
  saveFileSensors(sensors);
}

module.exports = {
  getSensors: getSensors,
  getActuators: getActuators,
  addMeasurement: addMeasurement,
  updateStatus: updateStatus,
  saveSensors: saveSensors,
  saveActuators: saveActuators
}