import { FormConfigElement } from '@custom-hooks/useFormConfig.ts';
import { InputEventsProps } from '@vanguard/_internal/InputBase/InputBase';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { CountryCode } from 'libphonenumber-js';
import React from 'react';

import styles from './PhoneNumber.module.scss';
import { PhoneNumberBase } from './PhoneNumberBase/PhoneNumberBase';
import { PhoneNumberPrefix } from './PhoneNumberPrefix/PhoneNumberPrefix';

export interface PhoneNumberProps {
  phoneNumberBase?: string;
  countryCode?: CountryCode;
  phoneNumberDisabled?: boolean;
  prefixNumberDisabled?: boolean;
  phoneNumberPlaceholder?: string;
  formConfig?: FormConfigElement;
  id?: string;
  phoneNumberBaseInputEvents?: InputEventsProps;
  phoneNumberPrefixInputEvents?: InputEventsProps;
}

export const PhoneNumber = (props: PhoneNumberProps) => {
  const {
    phoneNumberBase,
    countryCode,
    phoneNumberDisabled,
    prefixNumberDisabled,
    phoneNumberPlaceholder,
    formConfig,
    id,
    phoneNumberBaseInputEvents,
    phoneNumberPrefixInputEvents,
  } = props;

  return (
    <ComponentContainer className={styles.phoneNumberComponent} testId={'phoneNumberComponent'}>
      <PhoneNumberPrefix
        label=""
        className={styles.phoneNumberPrefix}
        countryCode={countryCode}
        disabled={prefixNumberDisabled}
        onChange={phoneNumberPrefixInputEvents?.onChange}
        onBlur={phoneNumberPrefixInputEvents?.onBlur}
        onFocus={phoneNumberPrefixInputEvents?.onFocus}
        onInput={phoneNumberPrefixInputEvents?.onInput}
        onKeyDown={phoneNumberPrefixInputEvents?.onKeyDown}
        onKeyUp={phoneNumberPrefixInputEvents?.onKeyUp}
      />
      <PhoneNumberBase
        label=""
        id={id}
        formConfig={formConfig}
        countryCode={countryCode}
        value={phoneNumberBase}
        className={styles.phoneNumberBase}
        disabled={phoneNumberDisabled}
        placeholder={phoneNumberPlaceholder}
        onChange={phoneNumberBaseInputEvents?.onChange}
        onBlur={phoneNumberBaseInputEvents?.onBlur}
        onFocus={phoneNumberBaseInputEvents?.onFocus}
        onInput={phoneNumberBaseInputEvents?.onInput}
        onKeyDown={phoneNumberBaseInputEvents?.onKeyDown}
        onKeyUp={phoneNumberBaseInputEvents?.onKeyUp}
      />
    </ComponentContainer>
  );
};
