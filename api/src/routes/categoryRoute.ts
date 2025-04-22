import express from "express";
import { addNewCategory, deleteCategoryById, getAllCategories, getProductsByCategoryId, updateCategoryById } from "../controllers/categoryController";

const router = express.Router();

router.get('/categories',getAllCategories);
router.get('/categories/:id/products',getProductsByCategoryId);
router.post('/categories',addNewCategory);
router.patch('/categories/:id',updateCategoryById);
router.delete('/categories/:id',deleteCategoryById);


export default router;