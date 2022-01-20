import { Router } from 'express'
import { getCash_Order,getCash_Orders, createCash_Order,deleteCash_Order, updateCash_Order} from '../controllers/cash_order.controller'

const router = Router();

router.route('/')
    .get(getCash_Orders)
    .post(createCash_Order);

router.route('/:order_id')
    .get(getCash_Order)
    .delete(deleteCash_Order)
    .put(updateCash_Order);

export default router;