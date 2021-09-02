import * as yup from 'yup'

  export const userSchema = yup.object().shape({
    name: yup.string().trim().min(2, 'Nome deve possuir mais de 2 caracteres').required(),
    email: yup.string().trim().min(5, 'Email deve possuir mais de 5 caracteres').email('Digite um email válido!').required(),
    password: yup.string().min(5, 'Senha deve possuir mais de 5 caracteres').required(),
  })