"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const bike_1 = require("./bike");
const userSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 255,
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 255,
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    bikes: [bike_1.bikeSchema]
});
exports.UserModel = (0, mongoose_1.model)('User', userSchema);
