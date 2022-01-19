import { Router } from 'express'
import { getShippings, createShipping, getShipping, deleteShipping, updateShipping } from '../controllers/shipping.controller'

const router = Router();

router.route('/')
    .get(getShippings)
    .post(createShipping);

router.route('/:shipping_id')
    .get(getShipping)
    .delete(deleteShipping)
    .put(updateShipping);

export default router;