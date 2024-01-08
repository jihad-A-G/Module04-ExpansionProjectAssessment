import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
//  connection
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE,
    port: process.env.DB_PORT,
  }
);

const connect =async () =>{
    return await sequelize.sync({force:false})
} 

export {sequelize,connect};
