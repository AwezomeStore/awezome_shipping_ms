import { Request, Response } from 'express'

// DB
import { connect } from '../database/database'

import { Shipping_Type } from '../interface/Shipping_Type'

export async function getShipping_Types(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const shipping_type = await conn.query('SELECT * FROM shipping_type');
        return res.json(shipping_type[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createShipping_Type(req: Request, res: Response) {
    const newShipping_Type: Shipping_Type = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO shipping_type SET ?', [newShipping_Type]);
    res.json({
        message: 'New Shipping Type Created'
    });
}

export async function getShipping_Type(req: Request, res: Response) {
    const shipping_type_id = req.params.shipping_type_id;
    const conn = await connect();
    const shipping_type = await conn.query('SELECT * FROM shipping_type WHERE shipping_type_id = ?', [shipping_type_id]);
    res.json(shipping_type_id[0]);
}

export async function getShipping_TypeByCity(req: Request, res: Response) {
    const city_id = req.params.city_id;
    const conn = await connect();
    const shipping_type = await conn.query('SELECT * FROM shipping_type WHERE city_id = ?', [city_id]);
    res.json(city_id[0]);
}

export async function getShipping_TypeByName(req: Request, res: Response) {
    const shipping_type_name = req.params.shipping_type_name;
    const conn = await connect();
    const shipping_type = await conn.query('SELECT * FROM shipping_type WHERE shipping_type_name = ?', [shipping_type_name]);
    res.json(shipping_type_name[0]);
}


export async function deleteShipping_Type(req: Request, res: Response) {
    const shipping_type_id = req.params.shipping_type_id;
    const conn = await connect();
    await conn.query('DELETE FROM shipping_type WHERE shipping_type_id = ?', [shipping_type_id]);
    res.json({
        message: 'Shipping Type deleted'
    });
}

export async function updateShipping_Type(req: Request, res: Response) {
    const shipping_type_id = req.params.shipping_type_id;
    const updateShipping_Type: Shipping_Type = req.body;
    const conn = await connect();
    await conn.query('UPDATE shipping_type set ? WHERE shipping_type_id = ?', [updateShipping_Type, shipping_type_id]);
    res.json({
        message: 'Shipping Type Updated'
    });
}