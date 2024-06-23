import {Router} from "express"
import {addpost} from "./controller/post.controller.js"
import {deletepost} from "./controller/post.controller.js"
import {abdatePost} from "./controller/post.controller.js"
import {getpost} from "./controller/post.controller.js"
const router=Router();
router.post("/",addpost)
router.delete("/:id",deletepost)
router.patch("/:id",abdatePost)
router.get("/",getpost)

export default router;
