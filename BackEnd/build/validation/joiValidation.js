"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const expenseJoi_1 = require("../Schema/expenseJoi");
const validate = (req, res, next) => {
    const { error } = expenseJoi_1.expenseSchema.validate(req.body);
    if (error) {
        return res.json(error.message);
    }
    else {
        next();
    }
};
exports.validate = validate;
