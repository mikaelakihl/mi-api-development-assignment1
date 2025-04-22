import { Request, Response } from 'express';
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
