import { ValidationResult } from '@models/swagger/App/Infrastructure/Validation/ValidationResult';

export const ValidationErrorObjectType = {
  App_Infrastructure_Validation_ValidationError: 'App\\Infrastructure\\Validation\\ValidationError',
};

export type ValidationError = {
  /**
   * Complete object path to the property where validation failed
   */
  jsonPath?: string;
  elements?: ValidationResult[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ValidationErrorObjectType)[keyof typeof ValidationErrorObjectType];
};
