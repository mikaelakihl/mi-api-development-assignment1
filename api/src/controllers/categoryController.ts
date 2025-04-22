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

export const addNewCategory = async (req: Request, res: Response) => {
    const {name} = req.body;

    if (!name) {
        return res.status(400).send('Missing required information');
    }

    try {
        const [result] = await db.query(
            'INSERT INTO categories (name) VALUES (?)',
             [name]
        );

        res.status(201).json({message: 'Category created', categoryId: (result as any).insertId});
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating new category');
    }
};

export const updateCategoryById = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {name} = req.body;

    try {
        const fields: string [] = [];
        const values: any[] = [];

        if (name !== undefined) {
            fields.push('name = ?');
            values.push (name);
        }

        if (fields.length === 0) {
            return res.status(400).send('No fields to update');
        }

        values.push(id);

        const [result] = await db.query(
            `UPDATE categories SET ${fields.join(', ')} WHERE id = ?`, 
            values
        );

        if ((result as any).affectedRows === 0) {
            return res.status(404).send('Category not found');
          }

        res.status(200).json({ message: `Category with id ${id} is updated` });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating category');
    }
};

        