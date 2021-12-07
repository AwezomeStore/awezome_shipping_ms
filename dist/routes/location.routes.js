"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const location_controller_1 = require("../controllers/location.controller");
const router = (0, express_1.Router)();
router.route('/')
    .get(location_controller_1.getLocations)
    .post(location_controller_1.createLocation);
router.route('/:locationId')
    .get(location_controller_1.getLocation)
    .delete(location_controller_1.deleteLocation)
    .put(location_controller_1.updateLocation);
exports.default = router;
