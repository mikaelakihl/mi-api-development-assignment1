import mysql from 'mysql2/promise';

export const db = mysql.createPool({
     host: process.env.DB_HOST || '',
     user: process.env.DB_USER || '',
     password: process.env.DB_PASSWORD || '',
     database: process.env.DB_NAME || '',
     port: parseInt(process.env.DB_PORT || '3306')
});

export const connectToDB = async () => {
    try {
        console.log('🔍 DB config:', db.config.connectionConfig);
        await db.getConnection();
        console.log('You succeed with connection to DB')
    } catch (error: unknown) {
        console.error('Not succeed connecting to DB' + error)
    }
}