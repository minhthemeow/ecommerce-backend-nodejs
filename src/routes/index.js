'use strict'

const express = require('express')
const router = express.Router() // this is function

// router.get('/', (req, res, next) => {
//     // const strCmprs = "nicetry";
//     return res.status(200).json({
//         message: 'Hello World!',
//         // metadata: strCmprs.repeat(10000) 
//     })
// })
router.use('/v1/api', require('./access'))
module.exports = router