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
const user_1 = require("../models/user");
const listUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.UserModel.find();
    res.send(users);
});
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield user_1.UserModel.findByIdAndDelete(id);
    res.send(user);
});
const addUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let user = new user_1.UserModel(req.body);
    if (user.bikes === undefined || user.bikes.length === 0) {
        return res.status(400).json('Error: the user should have at least 1 bike');
    }
    try {
        user = yield user.save();
    }
    catch (err) {
        return res.status(400).json(err);
    }
    return res.status(201).json(user);
});
exports.default = { addUser, deleteUser, listUsers };
