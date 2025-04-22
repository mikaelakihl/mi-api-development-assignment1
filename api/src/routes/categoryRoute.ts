import express from "express";
import { getAllCategories, getProductsByCategoryId } from "../controllers/categoryController";

const router = express.Router();

router.get('/categories',getAllCategories);
router.get('/categories/:id/products',getProductsByCategoryId);

export default router;