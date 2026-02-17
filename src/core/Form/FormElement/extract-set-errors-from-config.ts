import { FormConfigElement } from '../../../custom-hooks/useFormConfig';

export const extractSetErrorsFromConfig = (childConfig: FormConfigElement): string => {
  const error = childConfig.passError;

  if (Array.isArray(error) && childConfig.arrayPosition !== undefined) {
    const activeError = error[childConfig.arrayPosition];
    childConfig.errors = [activeError] as any;
    return activeError ?? '';
  }

  if (Array.isArray(error) && childConfig.arrayPosition === undefined) {
    console.warn('Set an array error key on a non array formConfig this will not work');
    return '';
  }
  if (typeof error === 'string') {
    return error;
  }

  return '';
};
