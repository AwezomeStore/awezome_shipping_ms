import { Router } from 'express'
import { getCities, createCity, getCity, deleteCity, updateCity } from '../controllers/city.controller'

const router = Router();

router.route('/')
    .get(getCities)
    .post(createCity);

router.route('/:order_id')
    .get(getCity)
    .delete(deleteCity)
    .put(updateCity);

export default router;