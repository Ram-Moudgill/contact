import mongoose from 'mongoose'
const db = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb://localhost:27017/contactapp',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }
    )
    console.log(`${conn.connection.host} connected`)
  } catch (error) {
    console.error(`error:${error.message}`)
    process.exit(1)
  }
}
export default db
