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

export const addNewProduct = async (req: Request, res: Response) => {
    const {title,description,price,image,stock,category_id} = req.body;

    if (!title || !price || !category_id) {
        return res.status(400).send('Missing required information');
    }

    try {
        const [result] = await db.query(
            'INSERT INTO products (title, description, price, image, stock, category_id) VALUES (?, ?, ?, ?, ?, ?)',
             [title, description, price, image, stock, category_id]
        );

        res.status(201).json({message: 'Product created', productId: (result as any).insertId});
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating new product');
    }
};

export const deleteProductById = async (req: Request, res:Response) => {
    const {id} = req.params;

    try {
        const [result] = await db.query('DELETE FROM products WHERE id = ?', [id]);

        if ((result as any).affectedRows === 0) {
            return res.status(404).send('Product not found');
        }

        res.status(200).json({message: `Product with id ${id} deleted`});
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting product');
    }
    
};

export const updateProductById = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {title, description, price, image, stock, category_id} = req.body;

    try {
        const fields: string [] = [];
        const values: any[] = [];

        if (title !== undefined) {
            fields.push('title = ?');
            values.push (title);
        }

        if (description !== undefined) {
            fields.push('description = ?');
            values.push (description);
        }

        if (price !== undefined) {
            fields.push('price = ?');
            values.push (price);
        }

        if (image !== undefined) {
            fields.push('image = ?');
            values.push (image);
        }

        if (stock !== undefined) {
            fields.push('stock = ?');
            values.push (stock);
        }

        if (category_id !== undefined) {
            fields.push('category_id = ?');
            values.push (category_id);
        }

        if (fields.length === 0) {
            return res.status(400).send('No fields to update');
        }

        values.push(id);

        const [result] = await db.query(
            `UPDATE products SET ${fields.join(', ')} WHERE id = ?`, 
            values
        );

        if ((result as any).affectedRows === 0) {
            return res.status(404).send('Product not found');
          }

        res.status(200).json({ message: `Product with id ${id} is updated` });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating product');
    }
};