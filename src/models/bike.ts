import { Document, Schema, Model, model } from 'mongoose';

export interface IBike {
    color: String
    size: String    
}

export interface IBikeModel extends IBike, Document {    
}

export const bikeSchema = new Schema({
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

export const BikeModel: Model<IBikeModel> = model<IBikeModel>('Bike', bikeSchema);