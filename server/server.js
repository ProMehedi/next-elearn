import express from 'express'
import cors from 'cors'
import colors from 'colors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import instructorRoutes from './routes/instructorRoutes.js'
import courseRoutes from './routes/courseRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import connectDB from './config/db.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import path from 'path'

const __dirname = path.resolve()

// Enable .env
dotenv.config()

// Enable MongoDB Connection
connectDB()

const app = express()

app.use(cors())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

// Define Variable
const API_URL = process.env.API_URL || '/api'
const PORT = process.env.PORT || 5000
const NODE_ENV = process.env.NODE_ENV

// User Routes
app.use(`${API_URL}/users`, userRoutes)

// Instructor Routes
app.use(`${API_URL}/instructor`, instructorRoutes)

// Courses Routes
app.use(`${API_URL}/courses`, courseRoutes)

// Upload Routes
app.use(`${API_URL}/uploads`, uploadRoutes)

app.get('/', (req, res) => {
  res.send('API is running..')
})

// Make Static Folder for Uploading
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// Not Found Middleware
app.use(notFound)

// Error Handler Middleware
app.use(errorHandler)

app.listen(
  PORT,
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`.yellow.bold)
)
