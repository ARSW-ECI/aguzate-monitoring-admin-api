"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = require("mongoose");
const winston_1 = __importDefault(require("winston"));
require('dotenv').config();
function connectDB() {
    console.log(process.env.DB_URL);
    const db = process.env.DB_URL;
    if (!db) {
        throw new Error('DB URL BAD CONFIGURED');
    }
    (0, mongoose_1.connect)(db)
        .then(() => {
        winston_1.default.info(`Connected to database...`);
    })
        .catch(error => {
        winston_1.default.error('failed to connect', error);
    });
}
exports.connectDB = connectDB;
