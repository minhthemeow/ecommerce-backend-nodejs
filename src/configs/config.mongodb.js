'use strict'

// LEVEL 0
// const config = {
//     app: {
//         port: 3000
//     },
//     db: {
//         host: 'localhost',
//         port: 27017,
//         name: 'db'
//     }
// }

// LEVEL 1
const configDev = {
    app: {
        port: process.env.DEV_APP_PORT || 3000
    },
    db: {
        host: process.env.DEV_DB_HOST || 'localhost',
        port: process.env.DEV_DB_PORT || 27017,
        name: process.env.DEV_DB_NAME || 'dbDev'
    }
}

const configProduct = {
    app: {
        port: process.env.PRO_APP_HOST || 3052
    },
    db: {
        host: process.env.PRO_DB_HOST || 'localhost',
        port: process.env.PRO_DB_PORT || 27017,
        name: process.env.PRO_DB_NAME || 'dbPro'
    }
}
const config = {configDev, configProduct}
const env = process.env.EXAMPLE || 'configDev'
console.log(config[env], env)
module.exports = config[env]