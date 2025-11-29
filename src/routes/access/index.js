'use strict'

const express = require('express')
const accessController = require('../../controllers/access.controller')
const router = express.Router() // this is function

// signup
router.post('/shop/signup', accessController.signUp)

module.exports = router