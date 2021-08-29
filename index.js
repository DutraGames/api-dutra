const express = require('express')
const useRouter = require('./Router')


const app = express()

app.use('/', useRouter)
app.use('/cars', useRouter)

app.listen(3000)


