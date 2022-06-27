const express = require('express')
const { signup, signin } = require('../controller/auth')
const router = express.Router()
// const User = require('../models/user')

router.post('/signin', signin)

router.post('/signup', signup)

module.exports = router
