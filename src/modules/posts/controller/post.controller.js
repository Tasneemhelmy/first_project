import DBconnection from "../../../../database/connection.js"
const connection=DBconnection();
export const addpost=(req,res,next)=>{
    connection.query(`SELECT * FROM user WHERE id="${req.body.user_id}";`,(error,result)=>{
        if(error)
            return res.status(500).json({message:"error",error})
        if(result.length){
            connection.query(`INSERT INTO posts SET ?`,req.body,(error,result)=>{
                if(error)
                    return res.status(500).json({message:"error",error})
        
                return res.status(201).json({message:"done"})
            
            })
        }else{
            return res.status(404).json({message:"user not found"})
        }
    })

    
    
}
export const deletepost=(req,res,next)=>{
const {id}=req.params
connection.query(`SELECT * FROM posts WHERE id="${id}";`,(error,result)=>{
    if(error)
        return res.status(500).json({message:"error",error})
    if(result.length){
        connection.query(`DELETE FROM posts WHERE id="${id}";`,(error,result)=>{
        if(error)
                return res.status(500).json({message:"error",error})
        return res.status(200).json({message:" Delete done"})
        })
    }else{
        return res.status(404).json({message:"user not found"})
    }

})
}

export const abdatePost=(req,res,next)=>{
    const {id}=req.params
    connection.query(`SELECT * FROM posts WHERE id="${id}";`,(error,result)=>{
        if(error)
            return res.status(500).json({message:"error",error})
        if(result.length){
            connection.query(`UPDATE  posts SET title='${req.body.title}' WHERE id=${id};`,(error,result)=>{
            if(error)
                    return res.status(500).json({message:"error",error})
            return res.status(200).json({message:" Update done"})
            })
        }else{
            return res.status(404).json({message:"user not found"})
        }
    
    })

}
export const getpost=(req,res,next)=>{
    connection.query(`SELECT p.id ,p.title ,p.description,p.user_id,u.email,u.name FROM posts AS P JOIN user AS u ON p.user_id=u.id;`,(error,result)=>{
        if(error)  return res.status(500).json({message:"error",error})


            return res.status(200).json({message:"success",user:result})
    })
}