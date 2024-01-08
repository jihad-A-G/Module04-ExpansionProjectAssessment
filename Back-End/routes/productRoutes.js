import express from "express";
import * as productController from "../controllers/productController.js";

const router = express.Router();
router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.get("/myProducts", productController.getUserProducts);
router.post("/", productController.addProduct);
router.put("/",productController.updateProduct);
router.delete('/',productController.deleteProduct)

export default router;
