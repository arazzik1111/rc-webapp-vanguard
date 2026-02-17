import { ExceptionDetails } from '@models/swagger/DDD/Infrastructure/Exceptions/ExceptionDetails';

export type Exception = {
  /**
   * Error message
   */
  error?: string;
  exceptionDetails?: ExceptionDetails;
};
