import { phoneMasks } from '@helpers/phone-utils/phone-masks';
import {
  InputBase,
  InputCounterProps,
  InputEventsProps,
  InputFormConfigProps,
  InputLabelProps,
  InputValueProps,
} from '@vanguard/_internal/InputBase/InputBase';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { FlagAdornment } from '@vanguard/FlagAdornment/FlagAdornment';
import { CountryCode } from 'libphonenumber-js';
import React, { useEffect, useState } from 'react';

export type PhoneNumberPrefixProps = {
  countryCode?: CountryCode;
  className?: string;
  testId?: string;
  type?: 'text' | 'number' | 'email';
} & InputValueProps &
  InputCounterProps &
  InputLabelProps &
  InputEventsProps &
  InputFormConfigProps;

export const PhoneNumberPrefix = (props: PhoneNumberPrefixProps) => {
  const { className, type = 'text', testId, countryCode } = props;

  const [prefix, setPrefix] = useState<string>('');

  useEffect(() => {
    const country = phoneMasks.find((m) => m.iso === countryCode);

    if (!country) {
      return;
    }

    setPrefix(country.code);
  }, [countryCode]);

  if (!countryCode) return null;

  return (
    <ComponentContainer className={className}>
      <InputBase
        testId={testId}
        type={type}
        multiline={false}
        {...props}
        value={prefix}
        className={undefined}
        adornment={<FlagAdornment countryCode={countryCode.toLowerCase()} />}
      />
    </ComponentContainer>
  );
};
