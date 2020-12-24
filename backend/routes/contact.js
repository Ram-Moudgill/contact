import express from 'express'
const router = express.Router()
import contactModel from '../models/Contact.js'
import checkAuth from '../middlewares/checkauth.js'
import { check, validationResult } from 'express-validator'
import userModel from '../models/user.js'

router.get('/', checkAuth, async (req, res) => {
  try {
    const contacts = await contactModel
      .find({ user: req.user })
      .sort({ date: -1 })
    res.status(200).json(contacts)
  } catch (error) {
    console.error(error)
    res.status(500).json({ msg: 'server error' })
  }
})
router.post(
  '/',
  [
    checkAuth,
    [check('phone', 'Phone must be 10 charcters long').isLength({ min: 10 })],
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() })
    }
    const { name, email, phone, type } = req.body
    try {
      const newContact = new contactModel({
        name: name,
        email: email,
        phone: phone,
        type: type,
        user: req.user,
      })
      const contact = await newContact.save()
      res.json(contact)
    } catch (error) {
      console.error(error)
      res.status(500).json({ msg: 'server error' })
    }
  }
)
router.delete('/:id', checkAuth, async (req, res) => {
  try {
    await contactModel.findByIdAndRemove(req.params.id)
    res.json({ msg: 'Deleted successfully' })
  } catch (error) {
    console.error(error.message)
    res.json({ msg: 'internal server error' })
  }
})
router.put('/:id', (req, res) => {
  res.send('update route')
})

export default router
