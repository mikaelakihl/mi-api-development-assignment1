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