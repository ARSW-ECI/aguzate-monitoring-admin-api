
import { connect } from 'mongoose';
import winston from 'winston';


export function connectDB() {
    const db: string = 'mongodb://localhost:27017/aguzate-monitoring';
    connect(db)
        .then(() => {
            winston.info(`Connected to database...`);
        })
        .catch(error => {
            winston.error('failed to connect', error);
        });
}