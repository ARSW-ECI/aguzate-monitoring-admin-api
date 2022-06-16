"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeModel = exports.bikeSchema = void 0;
const mongoose_1 = require("mongoose");
exports.bikeSchema = new mongoose_1.Schema({
    color: {
        type: String,
        required: true,
        maxlength: 255,
    },
    size: {
        type: String,
        required: true,
        maxlength: 255,
    },
});
exports.BikeModel = (0, mongoose_1.model)('Bike', exports.bikeSchema);
