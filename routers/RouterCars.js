
const express = require('express')
const router = express.Router()


/* Variables Cars */
let Cars = [{
  id: 1,
  img: '../img/Tucson.jpg',
    name: 'Tucson',
    year: '2012',
    km: '110.000',
    price: '52.900'
  },
  {
    id: 2,
    img: '../img/Golf Sportline.jpg',
    name: 'Golf Sportline',
    year: '2010',
    km: '0',
    price: '43.900'
  },
  {
    id: 3,
    img: '../img/Fit lx 1.4.jpg',
    name: 'Fit lx 1.4',
    year: '2010',
    km: '0',
    price: '36.900'
  },
]

router.get('/cars', (req,res) =>{
  res.json(Cars)
})

module.exports = router