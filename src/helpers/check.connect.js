'use strict'

const mongoose = require('mongoose')
const _SECOND = 5000
const os = require('os')
const process = require('process')
//count connection
const countConnect = () => {
    const numConnect = mongoose.connections.length
    console.log(`Number of connections::${numConnect}`)
}

// check overload connection
const checkOverload = () => {
    // setInterval(() => {
    //     const numConnect = mongoose.connections.length
    //     const numCores = os.cpus().length
    //     const memoryUsage = process.memoryUsage().rss
    //     // Example max number of connections based on number of cores
    //     const maxConnections = numCores * 5

    //     console.log(`Active connections::${numConnect}`)
    //     console.log(`Memory usage::${memoryUsage / 1024 / 1024} MB`)
    //     if (numConnect > maxConnections) {
    //         console.log(`Connection overload detected!`)
    //     }

    // }, _SECOND)// monitor every 5 seconds
}

module.exports = {countConnect, checkOverload}