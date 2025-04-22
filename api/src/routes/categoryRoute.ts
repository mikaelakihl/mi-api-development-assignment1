import express from "express";
import { addNewCategory, getAllCategories, getProductsByCategoryId } from "../controllers/categoryController";

const router = express.Router();

router.get('/categories',getAllCategories);
router.get('/categories/:id/products',getProductsByCategoryId);
router.post('/categories',addNewCategory);

export default router;