// import DBconnection from "../../../../database/connection.js"
// const connection=DBconnection();

import postModel from "../../../../database/models/post.model.js";
import userModel from "../../../../database/models/users.model.js";

export const allPost=async(req,res,next)=>{
    const posts=await postModel.findAll({
        include:{
            model:userModel,
            attributes:{
                exclude:["password"]
            }
        }
    }) 
    res.status(200).json({message:"done",posts});
}
export const getPost= async(req,res,next)=>{
    const post=await postModel.findByPk(req.params.id,{
        include:{
            model:userModel,
            attributes:{
                exclude:["password"]
            }
        }
    })

    res.status(200).json({message:"done",post});
}

export  const update=async(req,res,next)=>{
    const post=await postModel.update(req.body,
        {where:{id:req.params.id

        }
    })
    return post[0]?res.status(200).json({message:"done",post}):res.status(404).json({message:"not found",post})
}

export  const Delete=async(req,res,next)=>{
    const post=await postModel.destroy(
        {where:{id:req.params.id

        }
    })
    return post?res.status(200).json({message:"done",post}):res.status(404).json({message:"not found",post})
}

export const addPost=async(req,res,next)=>{
    const exist=await userModel.findByPk(req.body.UserId)
    if(exist) {
        const post=await postModel.create(req.body)
        return res.status(200).json({message:"done",post})
    }
    res.status(404).json({message:"not found"})
}





// export const addpost=(req,res,next)=>{
//     connection.query(`SELECT * FROM user WHERE id="${req.body.user_id}";`,(error,result)=>{
//         if(error)
//             return res.status(500).json({message:"error",error})
//         if(result.length){
//             connection.query(`INSERT INTO posts SET ?`,req.body,(error,result)=>{
//                 if(error)
//                     return res.status(500).json({message:"error",error})
        
//                 return res.status(201).json({message:"done"})
            
//             })
//         }else{
//             return res.status(404).json({message:"user not found"})
//         }
//     })

    
    
// }
// export const deletepost=(req,res,next)=>{
// const {id}=req.params
// connection.query(`SELECT * FROM posts WHERE id="${id}";`,(error,result)=>{
//     if(error)
//         return res.status(500).json({message:"error",error})
//     if(result.length){
//         connection.query(`DELETE FROM posts WHERE id="${id}";`,(error,result)=>{
//         if(error)
//                 return res.status(500).json({message:"error",error})
//         return res.status(200).json({message:" Delete done"})
//         })
//     }else{
//         return res.status(404).json({message:"user not found"})
//     }

// })
// }

// export const abdatePost=(req,res,next)=>{
//     const {id}=req.params
//     connection.query(`SELECT * FROM posts WHERE id="${id}";`,(error,result)=>{
//         if(error)
//             return res.status(500).json({message:"error",error})
//         if(result.length){
//             connection.query(`UPDATE  posts SET title='${req.body.title}' WHERE id=${id};`,(error,result)=>{
//             if(error)
//                     return res.status(500).json({message:"error",error})
//             return res.status(200).json({message:" Update done"})
//             })
//         }else{
//             return res.status(404).json({message:"user not found"})
//         }
    
//     })

// }
// export const getpost=(req,res,next)=>{
//     connection.query(`SELECT p.id ,p.title ,p.description,p.user_id,u.email,u.name FROM posts AS P JOIN user AS u ON p.user_id=u.id;`,(error,result)=>{
//         if(error)  return res.status(500).json({message:"error",error})


//             return res.status(200).json({message:"success",user:result})
//     })
// }