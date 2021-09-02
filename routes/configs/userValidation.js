export const validateUser = (schema) => {
  return async (req, res, next) => {
    
    try{
      const validateBody = await schema.validate(req.body)
      req.body = validateBody
      next()
    } catch (error) {
      return res.status(400).send(`${error.errors}`)
    }
  }
}