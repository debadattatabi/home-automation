const service = require('./device-service')

module.exports = function (app) {
  // Add a new smart device
  app.post('/device/add', service.addNewDevice)
  // List all smart devices
  app.get('/device/list', service.listAllDevices)
  // Perform an operation on a device
  app.put('/device/perform', service.deviceAction)
  // Remove an installed device
  app.delete('/device/remove', service.removeADevice)
}
