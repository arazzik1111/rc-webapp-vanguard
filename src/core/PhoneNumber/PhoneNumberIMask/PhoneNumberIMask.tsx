import { InputEventsProps } from '@vanguard/_internal/InputBase/InputBase';
import React, { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';

export type MaskInputChangeResponse = { target: { name: string; value: string } };

export type PhoneNumberIMaskProps = {
  className?: string;
  name: string;
  phoneMask?: string;
} & InputEventsProps;

const PhoneNumberIMaskBase = (props: PhoneNumberIMaskProps, ref: any) => {
  const { phoneMask, className, onChange, onFocus, onBlur } = props;

  return (
    <IMaskInput
      // {...other}
      className={className}
      mask={phoneMask ?? ''}
      placeholder={phoneMask?.replaceAll('0', '#')}
      inputRef={ref}
      autofix={true}
      // lazy={true}
      eager={true}
      // onKeyUp={onChange}
      onAccept={(value: any) => {
        onChange && onChange({ currentTarget: { value } } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
      }}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export const PhoneNumberIMask = forwardRef(PhoneNumberIMaskBase);
