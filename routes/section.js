import app from "./configs/app.js"
import tokenValidation from './configs/tokenValidation.js'

app.get('/section', tokenValidation, async (req, res) => {
  
  const idUser = req.user._id

  try{

    return res.status(200).send({ message: `Usuário logado: _id:${idUser}` })

  } catch (err) {
    return res.status(400).send({ message: `Erro: ${err}` })
  }  
})

export default app