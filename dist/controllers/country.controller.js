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
exports.updateCountry = exports.deleteCountry = exports.getCountry = exports.createCountry = exports.getCountries = void 0;
// DB
const database_1 = require("../database");
function getCountries(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, database_1.connect)();
            const country = yield conn.query('SELECT * FROM country');
            return res.json(country[0]);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.getCountries = getCountries;
function createCountry(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newCountry = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO country SET ?', [newCountry]);
        res.json({
            message: 'New Country Created'
        });
    });
}
exports.createCountry = createCountry;
function getCountry(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const country_id = req.params.contry_id;
        const conn = yield (0, database_1.connect)();
        const country = yield conn.query('SELECT * FROM country WHERE country_id = ?', [country_id]);
        res.json(country[0]);
    });
}
exports.getCountry = getCountry;
function deleteCountry(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const country_id = req.params.country_id;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM country WHERE country_id = ?', [country_id]);
        res.json({
            message: 'Country deleted'
        });
    });
}
exports.deleteCountry = deleteCountry;
function updateCountry(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const country_id = req.params.contry_id;
        const updateCountry = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE country set ? WHERE country_id = ?', [updateCountry, country_id]);
        res.json({
            message: 'Country Updated'
        });
    });
}
exports.updateCountry = updateCountry;
