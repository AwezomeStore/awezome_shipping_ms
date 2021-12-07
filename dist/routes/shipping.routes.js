"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shipping_controller_1 = require("../controllers/shipping.controller");
const router = (0, express_1.Router)();
router.route('/')
    .get(shipping_controller_1.getShippings)
    .post(shipping_controller_1.createShipping);
router.route('/:shippingId')
    .get(shipping_controller_1.getShipping)
    .delete(shipping_controller_1.deleteShipping)
    .put(shipping_controller_1.updateShipping);
exports.default = router;
