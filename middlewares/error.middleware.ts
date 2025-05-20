import { NextFunction, Request, Response } from 'express';
import { AppError, InternalServerError } from '../errors';
import { APIResponder } from '../util/api.responder.util';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (!(err instanceof AppError) || !err.isOperational) {
    console.error('CRITICAL ERROR:', err);
    err = new InternalServerError('Something went wrong on our side.');
  }
  APIResponder.error(res, err);
};
