import express from "express";
import { addNewProduct, deleteProductById, getAllProducts, getProductById } from "../controllers/productController";

const router = express.Router();

router.get('/products',getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', addNewProduct);
router.delete('/products/:id', deleteProductById);

export default router;