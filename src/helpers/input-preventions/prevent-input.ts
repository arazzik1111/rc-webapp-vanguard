import { FormConfigElement } from '@custom-hooks/useFormConfig';

export const preventInput = (
  e: React.KeyboardEvent<HTMLDivElement>,
  formConfig?: FormConfigElement | null,
  value?: string | number,
) => {
  if (!formConfig) return true;
  if (!formConfig.prevention) return true;

  const target = e.target as HTMLInputElement;
  const selectionStart = target.selectionStart ?? 1;

  if (formConfig && formConfig.prevention) {
    if (
      e.code === 'Space' &&
      formConfig.prevention.multipleSpacesNotAllowed &&
      (value?.toString().slice(selectionStart - 1, selectionStart) === ' ' ||
        value?.toString().slice(selectionStart, selectionStart + 1) === ' ')
    ) {
      e.preventDefault();
    }

    if (e.key === '!' && formConfig.prevention.exclamationMarksNotAllowed) {
      e.preventDefault();
    }
  }
};
