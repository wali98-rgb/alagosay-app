import { Router } from "express"
import { create, findAll, findOne, update, destroy } from "../controllers/product.controller.js"
import authJwt from "../middlewares/authJwt.js  "
const productRoute = Router()

productRoute.get('/', findAll)
productRoute.get('/:id', findOne)

// productRoute.use(authJwt)
productRoute.post('/', create)
productRoute.put('/:id', update)
productRoute.delete('/:id', destroy)

export default productRoute