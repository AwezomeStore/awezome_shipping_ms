import { Request, Response } from 'express'

// DB
import { connect } from '../database/database'

import { Country } from '../interface/Country'

export async function getCountries(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const country = await conn.query('SELECT * FROM country');
        return res.json(country[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createCountry(req: Request, res: Response) {
    const newCountry: Country = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO country SET ?', [newCountry]);
    res.json({
        message: 'New Country Created'
    });
}

export async function getCountry(req: Request, res: Response) {
    const country_id = req.params.contry_id;
    const conn = await connect();
    const country = await conn.query('SELECT * FROM country WHERE country_id = ?', [country_id]);
    res.json(country[0]);
}

export async function deleteCountry(req: Request, res: Response) {
    const country_id = req.params.country_id;
    const conn = await connect();
    await conn.query('DELETE FROM country WHERE country_id = ?', [country_id]);
    res.json({
        message: 'Country deleted'
    });
}

export async function updateCountry(req: Request, res: Response) {
    const country_id = req.params.contry_id;
    const updateCountry: Country = req.body;
    const conn = await connect();
    await conn.query('UPDATE country set ? WHERE country_id = ?', [updateCountry, country_id]);
    res.json({
        message: 'Country Updated'
    });
}