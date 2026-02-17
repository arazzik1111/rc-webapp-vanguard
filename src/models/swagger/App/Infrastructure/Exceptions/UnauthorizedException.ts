import { ExceptionDetails } from '@models/swagger/App/Infrastructure/Exceptions/ExceptionDetails';

export type UnauthorizedException = {
  /**
   * Error message
   */
  error?: string;
  exceptionDetails?: ExceptionDetails;
};
