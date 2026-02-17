import { BadRequestException } from '@models/swagger/DDD/Infrastructure/Exceptions/BadRequestException';
import { InternalErrorException } from '@models/swagger/DDD/Infrastructure/Exceptions/InternalErrorException';

export const isInternalErrorException = (
  errorResp: any | InternalErrorException,
): errorResp is InternalErrorException => {
  return !!(errorResp && errorResp.error);
};

export const isBadRequestException = (errorResp: BadRequestException | any): errorResp is BadRequestException => {
  return !!(errorResp && errorResp.error && (errorResp.validationErrors || errorResp.exceptionDetails));
};
