import express from 'express'
import dotenv from 'dotenv'
const app = express(process.env.NODE_ENV)
const PORT = process.env.PORT || 5000
import user from './routes/user.js'
import contact from './routes/contact.js'
import auth from './routes/auth.js'
import db from './config/db.js'
dotenv.config()
db()
app.use(express.json({ extended: false }))
//auth route
app.use('/auth/api', auth)
//register route
app.use('/user/api', user)
//contact route
app.use('/contact/api', contact)
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`
  )
})
