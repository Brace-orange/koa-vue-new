import mongoose from 'mongoose'

const urlSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true
  }
})

export { urlSchema }