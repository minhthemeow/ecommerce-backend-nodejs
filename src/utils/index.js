'use strict'

// lodash hay ky hieu bang "_"
const _ = require('lodash')

const getInfoData = ({ fields = [], object = {} }) => {
    return _.pick( object, fields )
}

module.exports = {
    getInfoData
}