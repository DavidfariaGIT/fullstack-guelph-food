import express from 'express'
import { apiRouter } from './routes/getRouter.js'
import { authRouter } from './routes/auth.js'

const PORT = 8000
const app = express()

app.use(express.static('public')) 
app.use(express.json())

app.use('/api', apiRouter)
app.use('/api/restaurants', apiRouter)
app.use('/api/auth', authRouter)


app.listen(PORT, () => { 
  console.log(`Server running at http://localhost:${PORT}`)
}).on('error', (err) => {
  console.error('Failed to start server:', err)
}) 