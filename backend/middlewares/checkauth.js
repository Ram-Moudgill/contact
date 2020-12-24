import jwt from 'jsonwebtoken'

const checkAuth = (req, res, next) => {
  const token = req.header('x-auth-token')
  if (!token) {
    return res.status(400).json({ msg: 'Not authorised' })
  }
  try {
    const decoded = jwt.verify(token, 'mysecret')
    console.log(decoded.data)
    req.user = decoded.data
    next()
  } catch (error) {
    res.status(400).json({ msg: 'not authorised ' })
  }
}
export default checkAuth
