import { Request, Response } from 'express'

// DB
import { connect } from '../database/database'

import { City } from '../interface/City'

export async function getCities(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const city = await conn.query('SELECT * FROM city');
        return res.json(city[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createCity(req: Request, res: Response) {
    const newCity: City = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO city SET ?', [newCity]);
    res.json({
        message: 'New City Created'
    });
}

export async function getCity(req: Request, res: Response) {
    const city_id = req.params.city_id;
    const conn = await connect();
    const city = await conn.query('SELECT * FROM city WHERE city_id = ?', [city_id]);
    res.json(city[0]);
}

export async function deleteCity(req: Request, res: Response) {
    const city_id = req.params.city_id;
    const conn = await connect();
    await conn.query('DELETE FROM city WHERE city_id = ?', [city_id]);
    res.json({
        message: 'City deleted'
    });
}

export async function updateCity(req: Request, res: Response) {
    const city_id = req.params.city_id;
    const updateCity: City = req.body;
    const conn = await connect();
    await conn.query('UPDATE city set ? WHERE city_id = ?', [updateCity, city_id]);
    res.json({
        message: 'City Updated'
    });
}