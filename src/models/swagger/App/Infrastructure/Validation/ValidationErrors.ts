import { ValidationError } from '@models/swagger/App/Infrastructure/Validation/ValidationError';

export const ValidationErrorsObjectType = {
  App_Infrastructure_Validation_ValidationErrors: 'App\\Infrastructure\\Validation\\ValidationErrors',
};

export type ValidationErrors = {
  elements?: ValidationError[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ValidationErrorsObjectType)[keyof typeof ValidationErrorsObjectType];
};
