import { Document, Schema, Model, model } from 'mongoose';
import { bikeSchema } from './bike';

export interface IUser {
    firstName: String
    lastName: String
    email: String
}

export interface IUserModel extends IUser, Document {    
}

const userSchema = new Schema({
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
    bikes: [bikeSchema]
});

export const UserModel: Model<IUserModel> = model<IUserModel>('User', userSchema);