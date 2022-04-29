import { Request, Response, NextFunction } from 'express';

const addBike = async (req: Request, res: Response, next: NextFunction) => {

    return res.status(200).json({
        
    });
};

export default { addBike };