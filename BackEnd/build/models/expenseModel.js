"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expenseModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const expenseSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        require: true,
        unique: true,
    },
    amount: {
        type: String,
        require: true,
    },
    date: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
});
const expenseModel = mongoose_1.default.model("user", expenseSchema);
exports.expenseModel = expenseModel;
