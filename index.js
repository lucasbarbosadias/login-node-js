import register from './routes/register.js'
import login from './routes/login.js'
import section from './routes/section.js'

import express from 'express'
import cors from 'cors'

const app = express()

const { SERVER } = process.env

app.use(cors())
app.use(express.json())

app.use(register)
app.use(login)
app.use(section)

app.listen(SERVER)