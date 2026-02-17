import { ExceptionDetails } from '@models/swagger/App/Infrastructure/Exceptions/ExceptionDetails';
import { ValidationErrors } from '@models/swagger/App/Infrastructure/Validation/ValidationErrors';

export type BadRequestException = {
  validationErrors?: ValidationErrors;
  /**
   * Error message
   */
  error?: string;
  exceptionDetails?: ExceptionDetails;
};
