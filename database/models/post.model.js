import { DataTypes } from 'sequelize';
import sequelize from '../connection.js';
const postModel=sequelize.define('post',{
    // id:{
    //     type:DataTypes.INTEGER,
    //     primaryKey:true,
    //     autoIncrement:true

    // }
    title:{
        type:DataTypes.STRING(150),
        allowNull:false

    },
    description:{
        allowNull: false,
        type: DataTypes.STRING(150)
    }

},{
    timestamps:false
}
)
export default postModel;