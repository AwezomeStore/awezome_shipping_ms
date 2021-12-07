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
exports.updateCity = exports.deleteCity = exports.getCity = exports.createCity = exports.getCities = void 0;
// DB
const database_1 = require("../database");
function getCities(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, database_1.connect)();
            const city = yield conn.query('SELECT * FROM city');
            return res.json(city[0]);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.getCities = getCities;
function createCity(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newCity = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO city SET ?', [newCity]);
        res.json({
            message: 'New City Created'
        });
    });
}
exports.createCity = createCity;
function getCity(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const city_id = req.params.city_id;
        const conn = yield (0, database_1.connect)();
        const city = yield conn.query('SELECT * FROM city WHERE city_id = ?', [city_id]);
        res.json(city[0]);
    });
}
exports.getCity = getCity;
function deleteCity(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const city_id = req.params.city_id;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM city WHERE city_id = ?', [city_id]);
        res.json({
            message: 'City deleted'
        });
    });
}
exports.deleteCity = deleteCity;
function updateCity(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const city_id = req.params.city_id;
        const updateCity = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE city set ? WHERE city_id = ?', [updateCity, city_id]);
        res.json({
            message: 'City Updated'
        });
    });
}
exports.updateCity = updateCity;
