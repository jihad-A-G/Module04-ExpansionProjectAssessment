import { Sequelize } from "sequelize";
import { sequelize } from "../db.js";

const Category = sequelize.define("category", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},{timestamps:true});

export default Category;
