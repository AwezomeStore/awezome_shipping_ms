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
exports.updateShipping = exports.deleteShipping = exports.getShipping = exports.createShipping = exports.getShippings = void 0;
// DB
const database_1 = require("../database");
function getShippings(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, database_1.connect)();
            const shipping = yield conn.query('SELECT * FROM shipping');
            return res.json(shipping[0]);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.getShippings = getShippings;
function createShipping(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newShipping = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO shipping SET ?', [newShipping]);
        res.json({
            message: 'New Shipping Created'
        });
    });
}
exports.createShipping = createShipping;
function getShipping(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const shipping_id = req.params.shipping_id;
        const conn = yield (0, database_1.connect)();
        const shipping = yield conn.query('SELECT * FROM shipping WHERE shipping_id  = ?', [shipping_id]);
        res.json(shipping[0]);
    });
}
exports.getShipping = getShipping;
function deleteShipping(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const shipping_id = req.params.shipping_id;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM shipping WHERE shipping_id = ?', [shipping_id]);
        res.json({
            message: 'Shipping deleted'
        });
    });
}
exports.deleteShipping = deleteShipping;
function updateShipping(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const shipping_id = req.params.shipping_id;
        const updateShipping = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE shipping set ? WHERE shipping_id = ?', [updateShipping, shipping_id]);
        res.json({
            message: 'Shipping Updated'
        });
    });
}
exports.updateShipping = updateShipping;
