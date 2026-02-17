import { ExceptionDetails } from '@models/swagger/DDD/Infrastructure/Exceptions/ExceptionDetails';

export type NotFoundException = {
  /**
   * Error message
   */
  error?: string;
  exceptionDetails?: ExceptionDetails;
};
