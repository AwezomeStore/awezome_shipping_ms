import { Router } from 'express'
import { getShippings, createShipping, getShipping, deleteShipping, updateShipping } from '../controllers/shipping.controller'

const router = Router();

router.route('/')
    .get(getShippings)
    .post(createShipping);

router.route('/:shippingId')
    .get(getShipping)
    .delete(deleteShipping)
    .put(updateShipping);

export default router;