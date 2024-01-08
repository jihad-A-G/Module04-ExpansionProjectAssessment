import { sequelize } from "../db.js"
import { Sequelize } from "sequelize"

const User = sequelize.define("user",{
username:{type:Sequelize.STRING,
allowNull:false},
email:{
    type:Sequelize.STRING,
    allowNull:false,
},
password:{
    type:Sequelize.STRING,
    allowNull:false
}
},{timestamps:true})

export default User