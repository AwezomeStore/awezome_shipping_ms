import { Request, Response } from 'express'

// DB
import { connect } from '../database/database'

import { Cash_Order } from '../interface/Cash_Order'

export async function getCash_Orders(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const cash_order = await conn.query('SELECT * FROM cash_order');
        return res.json(cash_order[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createCash_Order(req: Request, res: Response) {
    const newCash_Order: Cash_Order = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO cash_order SET ?', [newCash_Order]);
    res.json({
        message: 'New Cash Order Created'
    });
}

export async function getCash_Order(req: Request, res: Response) {
    const order_id = req.params.order_id;
    const conn = await connect();
    const cash_order = await conn.query('SELECT * FROM cash_order WHERE order_id = ?', [order_id]);
    res.json(cash_order[0]);
}

export async function deleteCash_Order(req: Request, res: Response) {
    const order_id = req.params.order_id;
    const conn = await connect();
    await conn.query('DELETE FROM cash_order WHERE city_id = ?', [order_id]);
    res.json({
        message: 'Cash Order deleted'
    });
}

export async function updateCash_Order(req: Request, res: Response) {
    const order_id = req.params.order_id;
    const updateCash_Order: Cash_Order = req.body;
    const conn = await connect();
    await conn.query('UPDATE cash_order set ? WHERE order_id = ?', [updateCash_Order, order_id]);
    res.json({
        message: 'City Updated'
    });
}