"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const city_controller_1 = require("../controllers/city.controller");
const router = (0, express_1.Router)();
router.route('/')
    .get(city_controller_1.getCities)
    .post(city_controller_1.createCity);
router.route('/:cityId')
    .get(city_controller_1.getCity)
    .delete(city_controller_1.deleteCity)
    .put(city_controller_1.updateCity);
exports.default = router;
