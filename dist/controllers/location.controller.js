"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLocation = exports.deleteLocation = exports.getLocation = exports.createLocation = exports.getLocations = void 0;
// DB
const database_1 = require("../database");
function getLocations(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, database_1.connect)();
            const location = yield conn.query('SELECT * FROM location');
            return res.json(location[0]);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.getLocations = getLocations;
function createLocation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newLocation = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO location SET ?', [newLocation]);
        res.json({
            message: 'New Location Created'
        });
    });
}
exports.createLocation = createLocation;
function getLocation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const location_id = req.params.location_id;
        const conn = yield (0, database_1.connect)();
        const location = yield conn.query('SELECT * FROM location WHERE location_id = ?', [location_id]);
        res.json(location[0]);
    });
}
exports.getLocation = getLocation;
function deleteLocation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const location_id = req.params.location_id;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM location WHERE location_id = ?', [location_id]);
        res.json({
            message: 'Location deleted'
        });
    });
}
exports.deleteLocation = deleteLocation;
function updateLocation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const location_id = req.params.location_id;
        const updateLocation = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE location set ? WHERE location_id = ?', [updateLocation, location_id]);
        res.json({
            message: 'Location Updated'
        });
    });
}
exports.updateLocation = updateLocation;
