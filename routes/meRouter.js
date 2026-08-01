import express from 'express'
import { getCurrentUser } from '../controllers/getCurrentUser.js'


export const meRouter = express.Router()

meRouter.get('/', getCurrentUser)