import { BadRequestException } from '@models/swagger/DDD/Infrastructure/Exceptions/BadRequestException';
import { ValidationErrors } from '@models/swagger/DDD/Infrastructure/Validation/ValidationErrors';
import { ValidationResult } from '@models/swagger/DDD/Infrastructure/Validation/ValidationResult';
import { PayloadAction } from '@reduxjs/toolkit';

export type ValidationResultWithInfo = ValidationResult & {
  info: unknown;
};
export const extractErrorScopes = <T extends Record<string, string>>(
  request: PayloadAction<any, any, any>,
): ValidationResult[] => {
  const payloadErrors = request.payload as unknown as BadRequestException;
  const errors = payloadErrors.validationErrors as ValidationErrors;
  const formattedErrors: ValidationResultWithInfo[] = [];

  errors?.elements?.map((item) => {
    if (item.elements) {
      const jsonPath = item.jsonPath;
      const error = item.elements[0];
      let allFields = {} as any;
      if (jsonPath && error && error.errorMessage) {
        for (const key in request.meta.arg.requestBody) {
          const subElement = request.meta.arg.requestBody[key];

          const fn = function (prev: any, key: any) {
            if (prev && key) {
              if (prev[key]) {
                return prev[key];
              }
            }
          };
          // @ts-ignore //TODO FIXME
          const extractedField: any = (jsonPath.match(/\d+|\w+/gm) ?? []).reduce(fn, subElement);
          allFields = { ...allFields, ...extractedField };
        }
        const validationResultWithInfo: ValidationResultWithInfo = { ...error, info: allFields };
        formattedErrors.push(validationResultWithInfo);
      }
    }
  });

  // console.log("formattedErrors", formattedErrors);
  return formattedErrors;
};
