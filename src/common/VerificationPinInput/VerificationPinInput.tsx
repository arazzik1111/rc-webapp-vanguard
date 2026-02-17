import { VerificationPinInputIMask } from '@common/VerificationPinInput/VerificationPinInputIMask/VerificationPinInputIMask';
import { FormConfigElement } from '@custom-hooks/useFormConfig';
import { classNames } from '@helpers/classNames';
import {
  InputBase,
  InputCounterProps,
  InputEventsProps,
  InputFormConfigProps,
  InputLabelProps,
  InputValueProps,
} from '@vanguard/_internal/InputBase/InputBase';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import React from 'react';

import styles from './VerificationPinInput.module.scss';

export type VerificationPinInputProps = {
  adornment: React.ReactNode;
  pinMask: string;
  formConfig?: FormConfigElement;
  pinInputEvents?: InputEventsProps;
  pinIsIncorrect?: boolean;
} & InputValueProps &
  InputCounterProps &
  InputLabelProps &
  InputEventsProps &
  InputFormConfigProps;

export const VerificationPinInput = (props: VerificationPinInputProps) => {
  const { adornment, pinMask, formConfig, pinInputEvents, pinIsIncorrect } = props;

  return (
    <ComponentContainer>
      <InputBase
        formconfig={formConfig}
        type={'text'}
        multiline={false}
        placeholder={'12345'}
        className={classNames(styles.input, pinIsIncorrect ? styles.error : '')}
        adornment={adornment}
        textFieldProps={{
          InputProps: {
            inputComponent: VerificationPinInputIMask as any,
          },
          inputProps: {
            pinMask,
          },
        }}
        onChange={pinInputEvents?.onChange}
        onBlur={pinInputEvents?.onBlur}
        onFocus={pinInputEvents?.onFocus}
        onInput={pinInputEvents?.onInput}
        onKeyDown={pinInputEvents?.onKeyDown}
        onKeyUp={pinInputEvents?.onKeyUp}
      />
    </ComponentContainer>
  );
};
