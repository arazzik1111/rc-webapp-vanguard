import React, { forwardRef } from 'react';
import { IMaskInput as IMaskInputBase } from 'react-imask';

export type IMaskInputProps = Omit<React.ComponentProps<typeof IMaskInputBase>, 'inputRef'> &
  React.InputHTMLAttributes<HTMLInputElement>;

export const IMaskInput = forwardRef<HTMLInputElement, IMaskInputProps>((props, ref) => {
  return <IMaskInputBase {...(props as any)} inputRef={ref as any} />;
});
