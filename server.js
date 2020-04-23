const express = require('express')
const cors = require('cors')
const config = require('./configurations/config')
const routes = require('./routes/index')
const db = require('./database/mysql')
// const db = require('./database/mysql')
const app = express()

// Global Variable Declarations
const middlewares = require('./middlewares/index')

// use cors
app.use(cors())

// required to get client IP when running via reverse proxy (HA proxy)
app.set('trust proxy', true)

// setup middlewares
middlewares(app)

// setup routes
routes(app)

// Function Call To Sync App Database Tables Before the Start of the Application
db.sequelize.sync().then((status) => {
  console.log('My SQL Tables Synced Successfully.')
  // start Express server
  app.listen(process.env.PORT || config.get('server.port'), function () {
    console.log('API Server with pid: %s listening on port: %s', process.pid, config.get('server.port'))
    console.log('Environment: %s', config.get('env'))
  })
}).catch((error) => {
  console.error('Error While Syncing My SQL Tables. Error: %j', error)
})

app.timeout = config.get('server.timeout')

process.on('uncaughtException', function (e) {
  console.error('uncaught exception:- ', e.stack)
})
