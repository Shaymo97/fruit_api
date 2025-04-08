const express = require('express')
const router = express.Router()
const fruits = require('../controllers/fruits') //The routes require the controllers file

router.get('/', fruits.index) //This passes the fruit input into the index function in controllers
router.get('/:name', fruits.show) //This passes the fruit input into the show function in controllers
router.post('/', fruits.create)
router.patch('/:name', fruits.update)
router.delete('/:name', fruits.destroy)

module.exports = router