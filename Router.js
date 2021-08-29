const express = require('express')
const router = express.Router()
const RouterGithub = require('./routers/RouterGithub')
const RouterCars = require('./routers/RouterCars')

router.get('/', RouterGithub)
router.get('/cars', RouterCars)

   
 
module.exports = router;