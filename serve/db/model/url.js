import mongoose from 'mongoose'
import { urlSchema } from '../schema/url'

const urlModel = mongoose.model('urlModel', urlSchema)

export { urlModel }