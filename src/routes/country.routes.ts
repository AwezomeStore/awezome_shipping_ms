import { Router } from 'express'
import { getCountries, createCountry, getCountry, deleteCountry, updateCountry } from '../controllers/country.controller'

const router = Router();

router.route('/')
    .get(getCountries)
    .post(createCountry);

router.route('/:contryId')
    .get(getCountry)
    .delete(deleteCountry)
    .put(updateCountry);

export default router;