import { ExceptionDetails } from '@models/swagger/App/Infrastructure/Exceptions/ExceptionDetails';

export type InternalErrorException = {
  /**
   * Error message
   */
  error?: string;
  exceptionDetails?: ExceptionDetails;
};
