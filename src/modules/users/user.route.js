import {Router} from "express"
// import {singUp} from "./controller/uesr.conroller.js"
// import {login} from "./controller/uesr.conroller.js"
import * as userController from './controller/uesr.conroller.js'
const router=Router();
router.post("/singUp",userController.singUp)
router.post("/login",userController.login)
router.get("/",userController.getUsers)

export default router;
