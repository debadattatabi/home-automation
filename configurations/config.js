const convict = require('convict')
const path = require('path')

const config = convict({
  env: {
    doc: 'The applicaton environment.',
    format: ['development'],
    default: 'development',
    env: 'NODE_ENV',
    arg: 'env'
  },
  server: {
    port: {
      doc: 'HTTP port to bind',
      format: 'Number',
      default: 5003
    },
    timeout: {
      doc: 'Server Timeout',
      format: 'Number',
      default: 60000
    },
    enableCompression: {
      doc: 'Enable HTTP compression',
      format: Boolean,
      default: true
    },
    bodyParser: {
      limit: {
        doc: 'maximum request body size',
        format: String,
        default: '100kb'
      }
    }
  },
  mysql: {
    host: {
      doc: 'Holds the SQL Server Host',
      format: String,
      default: 'localhost'
    },
    port: {
      doc: 'Holds the SQL Server Port',
      format: Number,
      default: 3306
    },
    username: {
      doc: 'Holds the SQL Server Username',
      format: String,
      default: 'root'
    },
    password: {
      doc: 'Holds the SQL Server Password',
      format: String,
      default: 'local'
    },
    database: {
      doc: 'Holds the Database In SQL Server',
      format: String,
      default: 'test'
    },
    dialect: {
      doc: 'Holds the Dialect Details That we are using for the Connection',
      format: String,
      default: 'mysql'
    },
    connectTimeout: {
      doc: 'Holds the Connection Timeout Time in ms',
      format: Number,
      default: 10000
    },
    pool: {
      max: {
        doc: 'Holds the Maximum SQL Pool Size',
        format: Number,
        default: 5
      },
      min: {
        doc: 'Holds the Minimum SQL Pool Size',
        format: Number,
        default: 0
      },
      acquire: {
        doc: 'Holds the Value for the time to Acquire the SQL Connection.',
        format: Number,
        default: 30000
      },
      idle: {
        doc: 'Holds the Idle Time for SQL To Reset the Connection.',
        format: Number,
        default: 10000
      }
    },
    dialectOptions: {
      multipleStatements: {
        doc: 'Whether to allow Multiple SQL Statements or not',
        format: Boolean,
        default: true
      }
    },
    logging: {
      doc: 'Whether Logging is Enabled or not',
      format: Boolean,
      default: false
    }
  }
})

config.loadFile(path.join(__dirname, '/config-' + config.get('env') + '.json'))

// validate
config.validate()

module.exports = config
