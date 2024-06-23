import {Router} from "express"
import {singUp} from "./controller/uesr.conroller.js"
import {login} from "./controller/uesr.conroller.js"
const router=Router();
router.post("/",singUp)
router.post("/login",login)

export default router;
