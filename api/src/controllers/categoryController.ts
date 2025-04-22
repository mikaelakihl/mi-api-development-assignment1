import { json, Request, Response } from 'express';
import { db } from '../config/db';


export const getAllCategories = async (req: Request, res: Response) => {
    try {
        const [rows] = await db.query ('SELECT * FROM categories');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching categories');
    }
};

export const getProductsByCategoryId = async (req: Request, res: Response) => {
    const categoryId = req.params.id;

    try {
        const [rows] = await db.query(`
            SELECT products.*, categories.name AS category_name
            FROM products
            JOIN categories ON products.category_id = categories.id
            WHERE category_id = ?
            `, [categoryId]);
        
        if ((rows as any []).length === 0) {
            return res.status(404).send('No products found for this category');
        }    

        res.json(rows);
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching products by category');
    }
};

        