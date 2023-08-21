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
exports.deleteExpenseController = exports.updateExpenseController = exports.addExpenseController = exports.getExpenseController = void 0;
const expenseServices_1 = require("../services/expenseServices");
const getExpenseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getAllExpenses = yield (0, expenseServices_1.getExpense)();
    res.json(getAllExpenses);
});
exports.getExpenseController = getExpenseController;
const addExpenseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const addNewExpense = yield (0, expenseServices_1.addExpense)(req.body);
    res.json(addNewExpense);
});
exports.addExpenseController = addExpenseController;
const updateExpenseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { amount, date, description } = req.body;
    const newExpense = {
        amount: amount,
        date: date,
        description: description,
    };
    const addNewExpense = yield (0, expenseServices_1.updateExpense)(+id, newExpense);
    res.json(addNewExpense);
});
exports.updateExpenseController = updateExpenseController;
const deleteExpenseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const addNewExpense = yield (0, expenseServices_1.deleteExpense)(+id);
    res.json(addNewExpense);
});
exports.deleteExpenseController = deleteExpenseController;
