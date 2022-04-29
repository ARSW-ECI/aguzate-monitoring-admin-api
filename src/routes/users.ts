import express from 'express';
import controller from '../controllers/users';
const usersRouter = express.Router();

usersRouter.get('/users', controller.listUsers);
usersRouter.delete('/users/:id', controller.deleteUser);
usersRouter.post('/users', controller.addUser);

export = usersRouter;