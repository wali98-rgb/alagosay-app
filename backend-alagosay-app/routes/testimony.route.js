import { Router } from "express"
import { create, findAll, findOne, update, destroy } from "../controllers/testimony.controller.js"
import authJwt from "../middlewares/authJwt.js"
const testimonyRoute = Router()

testimonyRoute.get('/', findAll)
testimonyRoute.get('/:id', findOne)

// testimonyRoute.use(authJwt)
testimonyRoute.post('/', create)
testimonyRoute.put('/:id', update)
testimonyRoute.delete('/:id', destroy)

export default testimonyRoute