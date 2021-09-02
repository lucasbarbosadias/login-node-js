import jwt from 'jsonwebtoken'

export default function tokenValidation(req, res, next) {
  try {
    const token = req.header("auth-token")
    if (!token) {
      return res.status(401).send("Acesso inválido")
    }
    const verified = jwt.verify(token, process.env.SECRET)
    req.user = verified
    next()
  } catch (err) {
      res.status(400).send("Token Inválido")
  }
}