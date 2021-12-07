import { Router } from 'express'
import { getShipping_Types, createShipping_Type, getShipping_Type, getShipping_TypeByCity, getShipping_TypeByName, deleteShipping_Type, updateShipping_Type } from '../controllers/shipping_type.controller'

const router = Router();

router.route('/')
    .get(getShipping_Types)
    .post(createShipping_Type);

router.route('/:shipping_type_Id')
    .get(getShipping_Type)
    .delete(deleteShipping_Type)
    .put(updateShipping_Type);

router.route('/:city_Id')
    .get(getShipping_TypeByCity)

router.route('/:shipping_type_name')
    .get(getShipping_TypeByName)

export default router;