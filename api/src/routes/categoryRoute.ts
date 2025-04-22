import express from "express";
import { addNewCategory, getAllCategories, getProductsByCategoryId, updateCategoryById } from "../controllers/categoryController";

const router = express.Router();

router.get('/categories',getAllCategories);
router.get('/categories/:id/products',getProductsByCategoryId);
router.post('/categories',addNewCategory);
router.patch('/categories/:id',updateCategoryById);


export default router;