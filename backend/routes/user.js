import express from 'express'
const router = express.Router()
import jwt from 'jsonwebtoken'
import { check, validationResult } from 'express-validator'
import userModel from '../models/user.js'
import bcrypt from 'bcryptjs'
router.post(
  '/',
  [
    check('username', 'Username must not be empty').not().isEmpty(),
    check('email', 'Please enter a valid email id').isEmail(),
    check('password', 'Password must be 8 charcters long').isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() })
    }
    const { username, email, password } = req.body
    try {
      let user = await userModel.find({ email: email })
      if (user.length !== 0) {
        res.status(400).json({ msg: 'This email is already exist' })
      }
      user = new userModel({
        username: username,
        email: email,
        password: password,
      })
      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)
      const newuser = await user.save()
      const token = await jwt.sign({ data: newuser.id }, 'mysecret', {
        expiresIn: 60 * 60,
      })
      res.send({ token })
    } catch (error) {
      console.error(error)
    }
  }
)
export default router
