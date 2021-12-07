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
exports.updateCash_Order = exports.deleteCash_Order = exports.getCash_Order = exports.createCash_Order = exports.getCash_Orders = void 0;
// DB
const database_1 = require("../database");
function getCash_Orders(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, database_1.connect)();
            const cash_order = yield conn.query('SELECT * FROM cash_order');
            return res.json(cash_order[0]);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.getCash_Orders = getCash_Orders;
function createCash_Order(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newCash_Order = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO cash_order SET ?', [newCash_Order]);
        res.json({
            message: 'New Cash Order Created'
        });
    });
}
exports.createCash_Order = createCash_Order;
function getCash_Order(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const order_id = req.params.order_id;
        const conn = yield (0, database_1.connect)();
        const cash_order = yield conn.query('SELECT * FROM cash_order WHERE order_id = ?', [order_id]);
        res.json(cash_order[0]);
    });
}
exports.getCash_Order = getCash_Order;
function deleteCash_Order(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const order_id = req.params.order_id;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM cash_order WHERE city_id = ?', [order_id]);
        res.json({
            message: 'Cash Order deleted'
        });
    });
}
exports.deleteCash_Order = deleteCash_Order;
function updateCash_Order(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const order_id = req.params.order_id;
        const updateCash_Order = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE cash_order set ? WHERE order_id = ?', [updateCash_Order, order_id]);
        res.json({
            message: 'City Updated'
        });
    });
}
exports.updateCash_Order = updateCash_Order;
