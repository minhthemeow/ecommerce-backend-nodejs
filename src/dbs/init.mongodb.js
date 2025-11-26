'use strict'

const mongoose = require('mongoose')
const { db: {host, port, name}} = require('../configs/config.mongodb')

const connectStr = `mongodb://${host}:${port}/${name}`
console.log(connectStr)

//apply singleton design pattern
class Database {
    constructor() {
        this.connect()
    }
    
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
    
    connect(type = 'mongodb' ) {
        if (1===1) {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }
        mongoose.connect(connectStr, {
            maxPoolSize: 5
        }).then( _ => console.log("Connected mongodb success Pro"))
        .catch( err => console.log("Connect Error!"))
    }

}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb