import {Router} from "express"
// import {addpost} from "./controller/post.controller.js"
// import {deletepost} from "./controller/post.controller.js"
// import {abdatePost} from "./controller/post.controller.js"
// import {getpost} from "./controller/post.controller.js"
import * as postController from './controller/post.controller.js'
const router=Router();
router.get('/',postController.allPost)
router.get('/:id',postController.getPost)
router.put('/:id',postController.update)
router.delete('/:id',postController.Delete)
router.post("/",postController.addPost)






// router.post("/",addpost)
// router.delete("/:id",deletepost)
// router.patch("/:id",abdatePost)
// router.get("/",getpost)

export default router;
