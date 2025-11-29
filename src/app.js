require('dotenv').config()
const compression = require('compression')
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const app = express() 

// console.log('Process:: ', process.env)
// init middlewares
//Ghi log request (giám sát & debug):
app.use(morgan("dev"))
//Tăng bảo mật (HTTP headers):
app.use(helmet())
//Tối ưu hiệu suất (nén dữ liệu): 
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// init database
require('./dbs/init.mongodb')
const {countConnect, checkOverload} = require('./helpers/check.connect')
checkOverload()
// init routes
// app.get('/', (req, res, next) => {
//     const strCmprs = "nicetry";
//     return res.status(200).json({
//         message: 'Hello World!',
//         metadata: strCmprs.repeat(10000) 
//     })
// })
// handling errors
app.use('/', require('./routes'))
module.exports = app 