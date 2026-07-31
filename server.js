import express from 'express'
import { apiRouter } from './routes/getRouter.js'

const PORT = 8000
const app = express()

app.use(express.static('public')) 

app.use('/api', apiRouter)
app.use('/api/restaurants', apiRouter)
app.use('/api/restaurants/type', apiRouter)


app.listen(PORT, () => { 
  console.log(`Server running at http://localhost:${PORT}`)
}).on('error', (err) => {
  console.error('Failed to start server:', err)
}) 