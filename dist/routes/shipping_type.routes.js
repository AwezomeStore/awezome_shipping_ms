"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shipping_type_controller_1 = require("../controllers/shipping_type.controller");
const router = (0, express_1.Router)();
router.route('/')
    .get(shipping_type_controller_1.getShipping_Types)
    .post(shipping_type_controller_1.createShipping_Type);
router.route('/:shipping_type_Id')
    .get(shipping_type_controller_1.getShipping_Type)
    .delete(shipping_type_controller_1.deleteShipping_Type)
    .put(shipping_type_controller_1.updateShipping_Type);
exports.default = router;
