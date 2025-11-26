'use strict'

const mongoose = require('mongoose')

const connectStr = `mongodb://localhost:27017/shopDEV`

mongoose.connect(connectStr).then( _ => console.log("Connected mongodb success"))
.catch( err => console.log("Connect Error!"))

//dev
if (1===0) {
    mongoose.set('debug', true)
    mongoose.set('debug', { color: true })
}

module.exports = mongoose