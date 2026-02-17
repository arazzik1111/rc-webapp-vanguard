import { ExceptionDetails } from '@models/swagger/App/Infrastructure/Exceptions/ExceptionDetails';

export type Exception = {
  /**
   * Error message
   */
  error?: string;
  exceptionDetails?: ExceptionDetails;
};
