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
exports.updateShipping_Type = exports.deleteShipping_Type = exports.getShipping_Type = exports.createShipping_Type = exports.getShipping_Types = void 0;
// DB
const database_1 = require("../database");
function getShipping_Types(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, database_1.connect)();
            const shipping_type = yield conn.query('SELECT * FROM shipping_type');
            return res.json(shipping_type[0]);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.getShipping_Types = getShipping_Types;
function createShipping_Type(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newShipping_Type = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO shipping_type SET ?', [newShipping_Type]);
        res.json({
            message: 'New Shipping Type Created'
        });
    });
}
exports.createShipping_Type = createShipping_Type;
function getShipping_Type(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const shipping_type_id = req.params.shipping_type_id;
        const conn = yield (0, database_1.connect)();
        const shipping_type = yield conn.query('SELECT * FROM shipping_type WHERE shipping_type_id = ?', [shipping_type_id]);
        res.json(shipping_type_id[0]);
    });
}
exports.getShipping_Type = getShipping_Type;
function deleteShipping_Type(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const shipping_type_id = req.params.shipping_type_id;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM shipping_type WHERE shipping_type_id = ?', [shipping_type_id]);
        res.json({
            message: 'Shipping Type deleted'
        });
    });
}
exports.deleteShipping_Type = deleteShipping_Type;
function updateShipping_Type(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const shipping_type_id = req.params.shipping_type_id;
        const updateShipping_Type = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE shipping_type set ? WHERE shipping_type_id = ?', [updateShipping_Type, shipping_type_id]);
        res.json({
            message: 'Shipping Type Updated'
        });
    });
}
exports.updateShipping_Type = updateShipping_Type;
