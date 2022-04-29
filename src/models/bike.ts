import { Document, Schema, Model, model } from 'mongoose';

interface IBike {
    bikeId: Schema.Types.ObjectId
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
    bikeId: {
        type: Schema.Types.ObjectId,
        required: true,        
        unique: true,
        auto: true,
    },
});

export const BikeModel: Model<IBikeModel> = model<IBikeModel>('Bike', bikeSchema);