import User from "./models/userModel.js";
import Category from "./models/categoryModel.js";
import Product from "./models/productModel.js";

Category.hasMany(Product)
Product.belongsTo(Category)

User.hasMany(Product)
Product.belongsTo(User)
