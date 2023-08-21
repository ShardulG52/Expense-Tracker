"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expenseServiceController_1 = require("../controller/expenseServiceController");
const expenseRouter = express_1.default.Router();
expenseRouter.get("/", expenseServiceController_1.getExpenseController);
expenseRouter.post("/add", expenseServiceController_1.addExpenseController);
expenseRouter.put("/update/:id", expenseServiceController_1.updateExpenseController);
expenseRouter.delete("/delete/:id", expenseServiceController_1.deleteExpenseController);
exports.default = expenseRouter;
