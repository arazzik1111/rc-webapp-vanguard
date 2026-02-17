import { FormConfigElement } from '@custom-hooks/useFormConfig';
import { classNames } from '@helpers/classNames';
import { InputEventsProps } from '@vanguard/_internal/InputBase/InputBase';
import React, { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';

import styles from './VerificationPinInputIMask.module.scss';

export type MaskInputChangeResponse = { target: { name: string; value: string } };

export type VerificationPinInputIMaskProps = {
  pinMask?: string;
  formConfig?: FormConfigElement;
} & InputEventsProps;

const VerificationPinInputIMaskBase = (props: VerificationPinInputIMaskProps, ref: any) => {
  const { pinMask, onChange, onFocus, onBlur } = props;

  return (
    <IMaskInput
      // {...other}
      className={classNames(styles.mask)}
      placeholder={pinMask?.replaceAll('0', 'N')}
      mask={pinMask ?? ''}
      autofix={true}
      lazy={false}
      eager={true}
      inputRef={ref}
      autoCapitalize={'true'}
      /*definitions={{
            "0": /[0-9,a-z,A-Z]/,
          }}*/
      onAccept={(value: any) => {
        onChange && onChange({ currentTarget: { value } } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
      }}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export const VerificationPinInputIMask = forwardRef(VerificationPinInputIMaskBase);
