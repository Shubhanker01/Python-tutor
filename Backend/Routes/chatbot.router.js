const express = require('express')
const router = express.Router()
const chat = require('../controller/chatbot.controller')

router.route('/v1/chat').post(chat)

module.exports = router