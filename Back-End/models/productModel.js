import { Sequelize } from "sequelize";
import { sequelize } from "../db.js";

const Product = sequelize.define("product", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price:{
    type:Sequelize.INTEGER,
    allowNull:false
  }
},{timestamps:true});

export default Product