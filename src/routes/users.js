"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("../controllers/users"));
const usersRouter = express_1.default.Router();
usersRouter.get('/users', users_1.default.listUsers);
usersRouter.delete('/users/:id', users_1.default.deleteUser);
usersRouter.post('/users', users_1.default.addUser);
module.exports = usersRouter;
