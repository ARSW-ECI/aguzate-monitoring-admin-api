import { connect } from 'mongoose';
import winston from 'winston';
require('dotenv').config();

export function connectDB() {
    console.log(process.env.DB_URL);
    const db: string | undefined = process.env.DB_URL;

    if(!db) {
        throw new Error('DB URL BAD CONFIGURED')
    }

    connect(db)
        .then(() => {
            winston.info(`Connected to database...`);
        })
        .catch(error => {
            winston.error('failed to connect', error);
        });
}