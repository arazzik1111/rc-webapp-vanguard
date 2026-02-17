import { ExceptionDetail } from '@models/swagger/App/Infrastructure/Exceptions/ExceptionDetail';

export const ExceptionDetailsObjectType = {
  App_Infrastructure_Exceptions_ExceptionDetails: 'App\\Infrastructure\\Exceptions\\ExceptionDetails',
};

export type ExceptionDetails = {
  elements?: ExceptionDetail[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ExceptionDetailsObjectType)[keyof typeof ExceptionDetailsObjectType];
};
