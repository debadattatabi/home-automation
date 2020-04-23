const http = require('http')
const fs = require('fs')
const REQUEST = require('request')
const db = require('../../database/mysql')
/** @namespace */
const device = function () {

}

/** API To Add a new device
 * @param {String} name - Name of the device
 * @param {String} room - Room Name
 * @returns {Object} results - New Device details.
 */
device.saveNewDevicedetails = function (data) {
  return new Promise((resolve, reject) => {
    // Method To Add new device
    db.sequelize.models.device_switch.create(data).then(created => {
      resolve(created)
    }).catch(error => {
      console.error('Error: ', error)
      reject(error)
    })
  })
}

/** API To List All Smart Devices
 * @returns {Object} results - List of devices.
 */
device.listAllDevices = function () {
  return new Promise((resolve, reject) => {
    db.sequelize.models.device_switch.findAll({ raw: true }).then((results) => {
      resolve(results)
    }).catch((error) => {
      console.error('Error: ', error)
      reject(error)
    })
  })
}

/** API To Perform An Operation on a device
 * @param {Number} id - Device Id
 * @param {Boolean} status - Device Action: (true - switch on, false - switch off)
 * @returns {Boolean} status - Status of the Operation.
 */
device.deviceOperation = function (data) {
  return new Promise((resolve, reject) => {
    // Method To Perform An Action
    db.sequelize.models.device_switch.update({
      status: data.status
    }, {
      where: {
        id: data.id
      }
    }).then(updated => {
      resolve(updated)
    }).catch(error => {
      console.error('Error: ', error)
      reject(error)
    })
  })
}

/** API To Remove An Installed Device
 * @param {Number} id - Device Id
 * @returns {Boolean} status - Status of the Operation.
 */
device.removeDevices = function (data) {
  return new Promise((resolve, reject) => {
    // Method To Remove An Installed Device
    db.sequelize.models.device_switch.destroy({
      where: {
        id: data.id
      }
    }).then(removed => {
      resolve(removed)
    }).catch(error => {
      console.error('Error: ', error)
      reject(error)
    })
  })
}

module.exports = device
