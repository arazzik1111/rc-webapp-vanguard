import { translationService } from '@services/translation.service';
import { DateRangePickerFormatter } from '@vanguard/DateRangePicker/DateRangePicker.formatter';
import IMask from 'imask';
import moment from 'moment';
import React, { forwardRef, useRef } from 'react';
import { IMaskInput } from 'react-imask';

export type MaskInputChangeResponse = { target: { name: string; value: string } };

interface TextMaskCustom {
  onChange: (change: MaskInputChangeResponse) => void;
  name: string;
}

const DateRangePickerIMaskInputBase = (props: TextMaskCustom, ref: any) => {
  const { onChange, ...other } = props;
  const dates = translationService.translateArray(moment.monthsShort());
  const enums = useRef([
    ...dates,
    ...dates.map((x) => capitalizeFirstLetter(x)),
    ...dates.map((x) => x.toLowerCase()),
    ...dates.map((x) => x.toUpperCase()),
  ]);

  const formatter = new DateRangePickerFormatter();

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <IMaskInput
      {...other}
      placeholder={'d m - d m'}
      mask="d m - d m"
      autofix={true}
      lazy={false}
      eager={true}
      inputRef={ref}
      autoCapitalize={'true'}
      autoComplete={'true'}
      definitions={{
        '#': /[1-9]/,
      }}
      blocks={{
        d: { mask: IMask.MaskedRange, placeholderChar: formatter.dayPlaceholder, from: 1, to: 31, maxLength: 2 },
        m: {
          enum: enums.current,
          mask: IMask.MaskedEnum,
          placeholderChar: formatter.monthPlaceholder,
          minLength: 3,
          maxLength: 3,
        } as any,
      }}
      onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
};

export const DateRangePickerIMaskInput = forwardRef(DateRangePickerIMaskInputBase);
