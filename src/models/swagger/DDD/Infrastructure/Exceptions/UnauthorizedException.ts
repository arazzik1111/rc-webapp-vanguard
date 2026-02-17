import { ExceptionDetails } from '@models/swagger/DDD/Infrastructure/Exceptions/ExceptionDetails';

export type UnauthorizedException = {
  /**
   * Error message
   */
  error?: string;
  exceptionDetails?: ExceptionDetails;
};
