import Product from "../models/productModel.js";

export const getProducts = async(req,res,next) =>{
    try{
        const products = await Product.findAll()
        if(!products){
            return res.status(400).json({message:'No products found!'})
        }
        res.status(200).json({products})
    }catch(err){
        res.status(500).json({ message: "Cannot load products" });
        console.log(err);
    }
}

export const getUserProducts = async(req,res,next) =>{
    try{
        const products = await req.user.getProducts()
        if(!products){
            return res.status(400).json({ message: "No products found!" });
        }
        res.status(200).json({products})
    }catch(err){
        res.status(500).json({message:'Cannot load products'})
        console.log(err);
    }
}

export const getProductById = async(req,res,next) =>{
    const {id} = req.params
    try{
        const product = await Product.findByPk(id)
        if (!product) {
          return res.status(400).json({ message: "No product found!" });
        }
        res.status(200).json({ product });

    }catch(err){
        res.status(500).json({ message: "Cannot load products" });
        console.log(err);        
    }
}

export const addProduct = async(req,res,next) =>{
    const {title,description,price,category} = req.body
     try {
       if(!title || !description || !price || !category){
        return res.status(400).json({message:'All filed are required!'})
       }
       const product= await req.user.addProduct({title,description,category,price})
       res.status.son({message:'Product added successfully!',product })
     } catch (err) {
       res.status(500).json({ message: "Something went wrong" });
       console.log(err);
     }
    
}
export const updateProduct = async(req,res,next) =>{
    const {prodId} = req.params
    try{
        if(!prodId){
          return res.status(400).json({ message: "Id not found" });
        }
        if(!req.body){
          return res.status(400).json({ message: "Cannot update product" });
        }
        const [numberOfAffetedRows,affectedRows]=await Product.update({...req.body},{where:{id:prodId}})
        if(numberOfAffetedRows == 0){
             return res.status(200).json({ message: "No changes made" });
        }
        res.status(200).json({message:'Product updated successfully',product:affectedRows[0]})
    }catch(err){
        res.status(500).json({ message: "Something went wrong" });
        console.log(err);
    }
}

export const deleteProduct = async(req,res,next) =>{
const {prodId} = req.params
try{
    if(!prodId){
        return res.status(400).json({message:'Wrong id'})
    }
    const product = await Product.findByPk(prodId)
    if(!product){
        return res.status(404).json({message:'Product not found'})
    }
    await product.destroy()
    res.status(200).json({message:'Product was deleted successfully',product})
}catch(err){
    res.status(500).json({ message: "Something went wrong" });
    console.log(err);
}
}