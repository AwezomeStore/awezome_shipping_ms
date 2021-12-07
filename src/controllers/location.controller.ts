import { Request, Response } from 'express'

// DB
import { connect } from '../database/database'

import { Location } from '../interface/Location'

export async function getLocations(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const location = await conn.query('SELECT * FROM location');
        return res.json(location[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createLocation(req: Request, res: Response) {
    const newLocation: Location = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO location SET ?', [newLocation]);
    res.json({
        message: 'New Location Created'
    });
}

export async function getLocation(req: Request, res: Response) {
    const location_id = req.params.location_id;
    const conn = await connect();
    const location = await conn.query('SELECT * FROM location WHERE location_id = ?', [location_id]);
    res.json(location[0]);
}

export async function deleteLocation(req: Request, res: Response) {
    const location_id = req.params.location_id;
    const conn = await connect();
    await conn.query('DELETE FROM location WHERE location_id = ?', [location_id]);
    res.json({
        message: 'Location deleted'
    });
}

export async function updateLocation(req: Request, res: Response) {
    const location_id = req.params.location_id;
    const updateLocation: Location = req.body;
    const conn = await connect();
    await conn.query('UPDATE location set ? WHERE location_id = ?', [updateLocation, location_id]);
    res.json({
        message: 'Location Updated'
    });
}