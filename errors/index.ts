export class AppError extends Error {
    constructor(
      public readonly message: string,
      public readonly statusCode: number = 500,
      public readonly code: string = 'INTERNAL_ERROR',
      public readonly details?: any,
      public readonly isOperational: boolean = true, // Key part

    ) {
      super(message);
      Error.captureStackTrace(this, this.constructor);
    }
  }
  // Common HTTP Errors (4xx)
  export class BadRequestError extends AppError {
    constructor(message = 'Bad Request', details?: any) {
      super(message, 400, 'BAD_REQUEST', details);
    }
  }
  export class UnauthorizedError extends AppError {
    constructor(message = 'Unauthorized') {
      super(message, 401, 'UNAUTHORIZED');
    }
  }
  export class ForbiddenError extends AppError {
    constructor(message = 'Forbidden') {
      super(message, 403, 'FORBIDDEN');
    }
  }
  export class NotFoundError extends AppError {
    constructor(message = 'Not Found') {
      super(message, 404, 'NOT_FOUND');
    }
  }
  export class ConflictError extends AppError {
    constructor(message = 'Conflict') {
      super(message, 409, 'CONFLICT');
    }
  }
  export class ValidationError extends AppError {
    constructor(message = 'Validation Failed', details?: any) {
      super(message,422, 'VALIDATION_ERROR', details);
    }
  }
  // Server Errors (5xx)
  export class InternalServerError extends AppError {
    constructor(message = 'Internal Server Error') {
      super(message, 500, 'INTERNAL_ERROR');
    }
  }
 
  // Database Errors
  export class DatabaseError extends AppError {
    constructor(message = 'Database Error') {
      super(message, 500, 'DATABASE_ERROR');
    }
  }
 