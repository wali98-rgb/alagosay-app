import { Router } from "express"
import { create, findAll, findOne, update, destroy } from "../controllers/content.controller.js"
import authJwt from "../middlewares/authJwt.js  "
const contentRoute = Router()

contentRoute.get('/', findAll)
contentRoute.get('/:id', findOne)

// contentRoute.use(authJwt)
contentRoute.post('/', create)
contentRoute.put('/:id', update)
contentRoute.delete('/:id', destroy)

export default contentRoute