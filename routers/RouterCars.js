
const express = require('express')
const router = express.Router()


/* Variables Cars */
let Cars = [{
  id: 1,
  img: 'https://user-images.githubusercontent.com/69097449/131277190-4685e094-faef-41e8-936b-6bafdf16df9b.jpg',
    name: 'Tucson',
    year: '2012',
    km: '110.000',
    price: '52.900'
  },
  {
    id: 2,
    img: 'https://user-images.githubusercontent.com/69097449/131277263-763e90c1-b03d-43bc-97bd-d846f09c67ed.jpg',
    name: 'Golf Sportline',
    year: '2010',
    km: '0',
    price: '43.900'
  },
  {
    id: 3,
    img: 'https://user-images.githubusercontent.com/69097449/131277304-d763be7a-f38e-4806-ae5f-23a2a19021b2.jpg',
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