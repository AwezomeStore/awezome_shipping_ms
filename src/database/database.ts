import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        //host: 'localhost',
        //host: 'awezomestore_shipping_db',
        host: 'shipping_db',
        user: 'root',
        password: '123456',
        database: 'awezomestore_shipping_db',
        connectionLimit: 10
    });
    return connection;
}