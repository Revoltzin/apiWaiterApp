import { model, Schema } from 'mongoose'

export const Category = model('category', new Schema({
  name: String,
  icon: String,
}))
