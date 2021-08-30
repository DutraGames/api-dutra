const express = require('express')
const cors = require('cors')
const useRouter = require('./Router')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use('/', useRouter)
app.use('/cars', useRouter)

app.listen(port)


