const express = require('express')
const router = express.Router()

const Home = require('./routers/Home')
const Github = require('./routers/Github')
const Cars = require('./routers/Cars')

router.get('/', Home)
router.get('/github', Github)
router.get('/cars', Cars)

   
 
module.exports = router;