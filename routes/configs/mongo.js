import mongoose from 'mongoose'

// const params = {
//   'userNewUrlParser': true,
//   'useUnifiedTopology': true
// }

const { MONGODB } = process.env

mongoose.connect(MONGODB)

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  email: {
    type: String,
    required:true,
    minlength: 5
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  }
}, { collection: 'users' })

export { mongoose as Mongoose, usersSchema }