import { Request, Response } from 'express';
import { db } from '../config/db';


export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const [rows] = await db.query ('SELECT * FROM products');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching products');
    }
};

export const getProductById = async (req: Request, res: Response) => {
    const productId = req.params.id;

    try {
        const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [productId]);
    
        if ((rows as any[]).length === 0) {
            return res.status(404).send('Product not found');
        }

        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching product by id');
    }

};