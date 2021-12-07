import { Request, Response } from 'express'

// DB
import { connect } from '../database/database'

import { Shipping } from '../interface/Shipping'

export async function getShippings(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const shipping = await conn.query('SELECT * FROM shipping');
        return res.json(shipping[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createShipping(req: Request, res: Response) {
    const newShipping: Shipping = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO shipping SET ?', [newShipping]);
    res.json({
        message: 'New Shipping Created'
    });
}

export async function getShipping(req: Request, res: Response) {
    const shipping_id = req.params.shipping_id ;
    const conn = await connect();
    const shipping  = await conn.query('SELECT * FROM shipping WHERE shipping_id  = ?', [shipping_id]);
    res.json(shipping [0]);
}

export async function deleteShipping(req: Request, res: Response) {
    const shipping_id = req.params.shipping_id ;
    const conn = await connect();
    await conn.query('DELETE FROM shipping WHERE shipping_id = ?', [shipping_id]);
    res.json({
        message: 'Shipping deleted'
    });
}

export async function updateShipping(req: Request, res: Response) {
    const shipping_id = req.params.shipping_id ;
    const updateShipping: Shipping = req.body;
    const conn = await connect();
    await conn.query('UPDATE shipping set ? WHERE shipping_id = ?', [updateShipping, shipping_id]);
    res.json({
        message: 'Shipping Updated'
    });
}