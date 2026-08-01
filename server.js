import express from 'express'
import { apiRouter } from './routes/getRouter.js'
import { authRouter } from './routes/auth.js'
import { meRouter } from './routes/meRouter.js'
import session from 'express-session'
import dotenv from 'dotenv'

dotenv.config()

const PORT = 8000
const app = express()
const secret = process.env.SPIRAL_SESSION_SECRET 

app.use(express.static('public')) 
app.use(express.json())

app.use(session({
  secret: secret,
  resave: false, 
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    sameSite: 'lax'
  }
}))

app.use('/api', apiRouter)
app.use('/api/restaurants', apiRouter)
app.use('/api/auth/me', meRouter)
app.use('/api/auth', authRouter)


app.listen(PORT, () => { 
  console.log(`Server running at http://localhost:${PORT}`)
}).on('error', (err) => {
  console.error('Failed to start server:', err)
}) 