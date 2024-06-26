import { DataTypes } from 'sequelize';
import sequelize from '../connection.js';
import postModel from './post.model.js'
const userModel=sequelize.define('User',{
    // id:{
    //     type:DataTypes.INTEGER,
    //     primaryKey:true,
    //     autoIncrement:true

    // }
    name:{
        type:DataTypes.STRING(150),
        allowNull:false

    },
    email:{
        allowNull: false,
        type: DataTypes.STRING(150)
    },
    password:{
        type: DataTypes.STRING(200),
        allowNull:false
    }
},{
    timestamps:false
})
userModel.hasMany(postModel,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE",
})
postModel.belongsTo(userModel)


export default userModel;