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
  {
    id: 4,
    img: 'https://user-images.githubusercontent.com/69097449/131396609-8bba977f-067e-466e-a6be-aa960b746709.jpg',
    name: 'City 1.5 lx',
    year: '2013',
    km: '0',
    price: '46.900'
  },
  {
    id: 5,
    img: 'https://user-images.githubusercontent.com/69097449/131396720-c3b302a1-9d8a-415a-9757-0ada58394e36.jpg',
    name: 'Corsa Hatch 1.8 completo',
    year: '2005',
    km: '0',
    price: '17.900'
  },
  {
    id: 6,
    img: 'https://user-images.githubusercontent.com/69097449/131396808-ce045086-e918-4670-a1ee-5e381e219aea.jpg',
    name: 'Gol 1.0',
    year: '2001',
    km: '0',
    price: '16.900'
  },
]

router.get('/cars', (req,res) =>{
  res.json(Cars)
})

module.exports = router