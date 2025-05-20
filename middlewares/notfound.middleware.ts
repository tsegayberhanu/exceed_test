import { Request, Response, NextFunction } from 'express';
import { NotFoundError } from '../errors';

export function notFoundHandler(req: Request, res: Response, next: NextFunction): void {
  const message = `Route not found: ${req.method} ${req.originalUrl}`;
  next(new NotFoundError(message));
}