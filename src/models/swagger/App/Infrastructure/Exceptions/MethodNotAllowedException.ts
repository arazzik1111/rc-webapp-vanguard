import { ExceptionDetails } from '@models/swagger/App/Infrastructure/Exceptions/ExceptionDetails';

export type MethodNotAllowedException = {
  /**
   * Error message
   */
  error?: string;
  exceptionDetails?: ExceptionDetails;
};
