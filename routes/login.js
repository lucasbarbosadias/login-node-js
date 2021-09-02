import app from "./configs/app.js"
import dotenv from 'dotenv'
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { Mongoose, usersSchema } from './configs/mongo.js'

dotenv.config()

app.post('/login', async (req, res) => {
  
  const { email, password } = req.body
  const Users = Mongoose.model('users', usersSchema, 'users')

  try {

    const foundUser = await Users.findOne({ email })
    if(!foundUser) {
      return res.status(400).send('E-mail ou senha inválido')
    }

    const validPassword = await bcrypt.compare(password, foundUser.password)
    if(!validPassword) {
      return res.status(400).send('E-mail ou senha inválido')
    }

    const token = jwt.sign({ _id: foundUser._id }, process.env.SECRET, {
      expiresIn: 100000
    })

    res.header('auth-token', token)
    res.status(200).send('Login realizado com sucesso')
  } catch (err) {
    return res.send({ message: `Erro: ${err}` })
  }

})

export default app