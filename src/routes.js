const { Router } = require('express')
const cardController = require('./controllers/card.controller')

const router = Router()

router.get('/', cardController.index)

module.exports = router