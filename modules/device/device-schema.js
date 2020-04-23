const util = require('util')
const Validator = require('jsonschema').Validator
const _validator = new Validator()

const schemas = function () {
}

schemas.newDeviceDetails = {
  id: '/newDeviceDetails',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      required: true
    },
    room: {
      type: 'string',
      required: true
    }
  }
}

schemas.deviceActions = {
  id: '/deviceActions',
  type: 'object',
  properties: {
    id: {
      type: 'number',
      required: true
    },
    status: {
      type: 'boolean',
      required: true
    }
  }
}

schemas.removeDevices = {
  id: '/removeDevices',
  type: 'object',
  properties: {
    id: {
      type: 'number',
      required: true
    }
  }
}

schemas.validate = function (object, schema) {
  const errors = _validator.validate(object, schema).errors
  if (errors.length > 0) {
    logger.error(util.format('Schema validation failed for id:- %s errors:- %j', schema.id, errors))
  }
  return errors.length <= 0
}

module.exports = schemas
