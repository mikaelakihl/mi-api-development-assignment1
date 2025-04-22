import express from "express";
import { addNewProduct, deleteProductById, getAllProducts, getProductById, updateProductById } from "../controllers/productController";

const router = express.Router();

router.get('/products',getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', addNewProduct);
router.delete('/products/:id', deleteProductById);
router.patch('/products/:id', updateProductById);

export default router;