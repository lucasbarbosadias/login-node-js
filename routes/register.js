import app from './configs/app.js'
import { Mongoose, usersSchema } from './configs/mongo.js'
import bcrypt from 'bcrypt'
import { userSchema } from './configs/validation.js'
import { validateUser } from "./configs/userValidation.js"

app.post('/register', validateUser(userSchema), async (req, res) => {

  const { name, email } = req.body
  const salt = await bcrypt.genSalt(10)
  const passwordCrypt = await bcrypt.hash(req.body.password, salt)
  const password = passwordCrypt

  const Users = Mongoose.model('users', usersSchema, 'users')

  try {

    const foundUser = await Users.findOne({ email })

    if(foundUser) {
      return res.status(409).send({ message: 'E-mail já cadastrado!' })
    }

    const user = new Users({ name, email, password })
    await user.save()

    res.status(201).send({ message: 'Cadastro realizado com sucesso!' })
  } catch (err) {
    res.status(400).send({ message: `Erro: ${err}` })
  }
})

export default app