import express from 'express'

import { handleGet } from '../controllers/handleGet.js' 
import { handleFilter } from '../controllers/handleFilter.js'
import { handleAdd } from '../controllers/handleAdd.js'

export const apiRouter = express.Router()


apiRouter.get('/', handleGet)
apiRouter.get('/type', handleFilter)
apiRouter.post('/add', handleAdd)  


