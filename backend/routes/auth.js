import express from 'express'
const router = express.Router()
// const router = express.Router()
import jwt from 'jsonwebtoken'
import { check, validationResult } from 'express-validator'
import userModel from '../models/user.js'
import bcrypt from 'bcryptjs'
import checkAuth from '../middlewares/checkauth.js'
router.get('/', checkAuth, async (req, res) => {
  try {
    const user = await userModel.findById(req.user).select('-password')
    res.json({ user: user })
  } catch (error) {
    console.error(error)
    res.status(500).json({ msg: 'nodata' })
  }
})

router.post(
  '/',
  [
    check('email', 'Please enter a valid email id').isEmail(),
    check('password', 'Password must be entered').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() })
    }
    const { email, password } = req.body
    try {
      let user = await userModel.findOne({ email: email })
      if (user.length === 0) {
        return res.status(400).json({ msg: 'user not exists' })
      }
      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        res.status(400).json({ msg: 'password is not correct' })
      }
      const token = await jwt.sign({ data: user.id }, 'mysecret', {
        expiresIn: 60 * 60,
      })
      res.json({ token })
    } catch (err) {
      console.log(err)
    }
  }
)
export default router
