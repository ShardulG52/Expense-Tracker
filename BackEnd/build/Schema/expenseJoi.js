"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expenseSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const expenseSchema = joi_1.default.object({
    id: joi_1.default.string().required(),
    amount: joi_1.default.string().required(),
    date: joi_1.default.string(),
    description: joi_1.default.string().required().email(),
});
exports.expenseSchema = expenseSchema;
