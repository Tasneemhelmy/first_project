import userRoute from "./modules/users/user.route.js"
import postRoute from "./modules/posts/post.route.js"

const bootstrap=(app,express)=>{
app.use(express.json())
app.use('/user',userRoute)
app.use('/post',postRoute)
app.use('*',(req,res)=>{
    res.json({message:"Not Found 🥲"});
})
}
export default bootstrap;
