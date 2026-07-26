import express from 'express'

import { handleGet } from '../controllers/handleGet.js' 

export const apiRouter = express.Router()

apiRouter.get('/', handleGet)

