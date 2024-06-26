import userRoute from "./modules/users/user.route.js"
import postRoute from "./modules/posts/post.route.js"
import sequelize from '../database/connection.js';

const bootstrap=(app,express)=>{
    sequelize.sync({alter:false})
app.use(express.json())
app.use('/user',userRoute)
app.use('/post',postRoute)
app.use('*',(req,res)=>{
    res.json({message:"Not Found 🥲"});
})
}
export default bootstrap;
