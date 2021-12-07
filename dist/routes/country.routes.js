"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const country_controller_1 = require("../controllers/country.controller");
const router = (0, express_1.Router)();
router.route('/')
    .get(country_controller_1.getCountries)
    .post(country_controller_1.createCountry);
router.route('/:contryId')
    .get(country_controller_1.getCountry)
    .delete(country_controller_1.deleteCountry)
    .put(country_controller_1.updateCountry);
exports.default = router;
