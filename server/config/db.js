import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URL) {
      console.error(
        `Error: Plz add MONGO_URL into .env file`.red.underline.bold
      )
      process.exit(1)
    }
    const connect = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${connect.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
