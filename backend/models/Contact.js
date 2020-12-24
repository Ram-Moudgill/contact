import mongoose from 'mongoose'
const contactSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  type: {
    type: String,
    default: 'Personal',
  },
  date: {
    type: Date,
    default: Date.now(),
  },
})

export default mongoose.model('contact', contactSchema)
