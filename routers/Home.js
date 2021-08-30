const express = require('express')
const router = express.Router()

router.get('/', (req,res) =>{
    res.json({
        home: 'https://api-dutra.herokuapp.com/',
        github: 'https://api-dutra.herokuapp.com/github',
        cars: 'https://api-dutra.herokuapp.com/cars'
    })
  })

module.exports = router