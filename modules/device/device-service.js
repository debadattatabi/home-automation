const common = require('../../utils/common')
const schemas = require('./device-schema')
const device = require('./device-model')
const constants = require('../../utils/constants')

const addNewDevice = function (req, res) {
  const dataToCreate = common.sanitize(req.body, schemas.newDeviceDetails, constants.moduleNames.device)
  // Condition To Check that Whether the Received Request Data is Valid or Not
  if (schemas.validate(dataToCreate, schemas.newDeviceDetails)) {
    // Model Level Call To Add a new device
    device.saveNewDevicedetails(dataToCreate).then((status) => {
      return res.status(constants.httpStatusCode.success).send({
        code: constants.responseCodes.successfulOperation,
        message: constants.messageKeys.msg_success,
        data: status
      })
    }).catch((error) => {
      return res.status(constants.httpStatusCode.success).send({
        code: constants.responseCodes.failedOperation,
        message: constants.messageKeys.msg_failed,
        data: error
      })
    })
  } else {
    // Incomplete Data
    return res.status(constants.httpStatusCode.success).send({
      code: constants.responseCodes.revalidation,
      message: constants.messageKeys.msg_revalidate,
      data: {}
    })
  }
}

const listAllDevices = function (req, res) {
  device.listAllDevices().then((response) => {
    res.status(constants.httpStatusCode.success).send({
      code: constants.responseCodes.successfulOperation,
      message: constants.messageKeys.msg_success,
      data: response
    })
  }).catch((error) => {
    return res.status(constants.httpStatusCode.success).send({
      code: constants.responseCodes.failedOperation,
      message: constants.messageKeys.msg_revalidate,
      data: error
    })
  })
}

const deviceAction = function (req, res) {
  const deviceData = common.sanitize(req.body, schemas.deviceActions, constants.moduleNames.device)
  // Condition To Check that Whether the Received Request Data is Valid or Not
  if (schemas.validate(deviceData, schemas.deviceActions)) {
    // Model Level Call To Perform an action
    device.deviceOperation(deviceData).then((status) => {
      return res.status(constants.httpStatusCode.success).send({
        code: constants.responseCodes.successfulOperation,
        message: constants.messageKeys.msg_success,
        data: status
      })
    }).catch((error) => {
      return res.status(constants.httpStatusCode.success).send({
        code: constants.responseCodes.failedOperation,
        message: constants.messageKeys.msg_failed,
        data: error
      })
    })
  } else {
    // Incomplete Data
    return res.status(constants.httpStatusCode.success).send({
      code: constants.responseCodes.revalidation,
      message: constants.messageKeys.msg_revalidate,
      data: {}
    })
  }
}

const removeADevice = function (req, res) {
  const data = common.sanitize(req.body, schemas.removeDevices, constants.moduleNames.device)
  // Condition To Check that Whether the Received Request Data is Valid or Not
  if (schemas.validate(data, schemas.removeDevices)) {
    // Model Level Call To remove a device
    device.removeDevices(data).then((status) => {
      return res.status(constants.httpStatusCode.success).send({
        code: constants.responseCodes.successfulOperation,
        message: constants.messageKeys.msg_success,
        data: status
      })
    }).catch((error) => {
      return res.status(constants.httpStatusCode.success).send({
        code: constants.responseCodes.failedOperation,
        message: constants.messageKeys.msg_failed,
        data: error
      })
    })
  } else {
    // Incomplete Data
    return res.status(constants.httpStatusCode.success).send({
      code: constants.responseCodes.revalidation,
      message: constants.messageKeys.msg_revalidate,
      data: {}
    })
  }
}

module.exports = {
  addNewDevice: addNewDevice,
  listAllDevices: listAllDevices,
  deviceAction: deviceAction,
  removeADevice: removeADevice
}
