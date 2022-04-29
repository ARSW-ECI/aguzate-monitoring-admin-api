
import { Request, Response, NextFunction } from 'express';
import { UserModel } from '../models/user';

const listUsers = async (req: Request, res: Response, next: NextFunction) => {
    const users = await UserModel.find();
    res.send(users);
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);
    res.send(user);
};

const addUser = async (req: Request, res: Response, next: NextFunction) => {    
    let user = new UserModel(req.body)
    user = await user.save()
    return res.status(201).json(user);
};

export default { addUser, deleteUser, listUsers };