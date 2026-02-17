import { ExceptionDetails } from '@models/swagger/DDD/Infrastructure/Exceptions/ExceptionDetails';
import { ValidationErrors } from '@models/swagger/DDD/Infrastructure/Validation/ValidationErrors';

export type BadRequestException = {
  validationErrors?: ValidationErrors;
  /**
   * Error message
   */
  error?: string;
  exceptionDetails?: ExceptionDetails;
};
