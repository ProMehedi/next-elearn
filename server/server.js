import express from 'express'
import cors from 'cors'
import colors from 'colors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'

// Enable .env
dotenv.config()

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

app.get('/', (req, res) => {
  res.send('API is running..')
})

app.listen(
  PORT,
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`.yellow.bold)
)
