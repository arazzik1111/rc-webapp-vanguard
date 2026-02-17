import { ExceptionDetails } from '@models/swagger/DDD/Infrastructure/Exceptions/ExceptionDetails';

export type MethodNotAllowedException = {
  /**
   * Error message
   */
  error?: string;
  exceptionDetails?: ExceptionDetails;
};
