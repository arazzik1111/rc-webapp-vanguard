import { FormConfigElement } from '@custom-hooks/useFormConfig';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { Input } from '@vanguard/Input/Input';
import React, { ChangeEvent, FocusEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';

import styles from './VerificationCodeInput.module.scss';

export interface VerificationCodeInputProps {
  codeLength: number;
  values: string[];
  onlyNumeric: boolean;
  onCodeChanged: (params: { code: string; fulfilled: boolean }) => void;
  formConfig?: FormConfigElement;
}

export const VerificationCodeInput = (props: VerificationCodeInputProps) => {
  const { codeLength, onlyNumeric = true, onCodeChanged, formConfig } = props;
  const [values, setValues] = useState(props.values);

  for (let i = values.length; i < codeLength; i++) {
    values[i] = '';
  }

  const inputRefs: React.MutableRefObject<HTMLDivElement | null>[] = [];
  for (let i = 0; i < codeLength; i++) {
    const searchRef = useRef<HTMLDivElement>(null);
    inputRefs.push(searchRef);
  }

  useEffect(() => {
    let autoFocusIndex = 0;
    const index = values.findIndex((v) => v === '');
    autoFocusIndex = index >= codeLength ? 0 : index;
    const autoFocusElement = inputRefs[autoFocusIndex]?.current?.getElementsByTagName('input')[0];
    if (autoFocusElement) {
      autoFocusElement.focus();
    } else {
      inputRefs[codeLength - 1]?.current?.getElementsByTagName('input')[0].focus();
    }
  }, [values]);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const index = parseInt(e.currentTarget.id);
    if (onlyNumeric) {
      e.currentTarget.value = e.currentTarget.value.replace(/[^\d]/gi, '');
    }
    if (e.currentTarget.value === '' || !e.currentTarget.validity.valid) {
      return;
    }
    const value = e.currentTarget.value;
    if (value.length > 1) {
      const split = value.split('');
      split.forEach((item: string, i: number) => {
        const cursor = index + i;
        if (cursor < codeLength) {
          values[cursor] = item;
        }
      });
      setValues([...values]);
    } else {
      values[index] = value;
      setValues([...values]);
    }

    onCodeChanged({ code: values.join(''), fulfilled: values.join('').length === codeLength });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const index = parseInt(e.currentTarget.getElementsByTagName('input')[0].id ?? '-1');
    const prevIndex = index - 1;
    const nextIndex = index + 1;
    const prev = inputRefs[prevIndex]?.current?.getElementsByTagName('input')[0];
    const next = inputRefs[nextIndex]?.current?.getElementsByTagName('input')[0];
    switch (e.key) {
      case 'Backspace':
        e.preventDefault();
        if (values[index]) {
          values[index] = '';
          setValues([...values]);
        } else if (prev) {
          values[prevIndex] = '';
          setValues([...values]);
        }
        onCodeChanged({ code: values.join(''), fulfilled: values.join('').length === codeLength });
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (prev) {
          prev.focus();
        }
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (next) {
          next.focus();
        }
        break;
      case 'ArrowUp':
      case 'ArrowDown':
        e.preventDefault();
        break;
    }
  };

  const onFocus = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
    e.target.select();
  };

  return (
    <ComponentContainer>
      <div className={styles.verificationCodeInput}>
        {values.map((value, index) => (
          <div ref={inputRefs[index]} key={`${index}-${value}`}>
            <Input
              testId={`digit-${index}`}
              formconfig={formConfig}
              className={styles.inputContainer}
              label={''}
              data-id={index}
              value={value}
              id={`${index}`}
              onChange={onChange}
              onKeyDown={onKeyDown}
              onFocus={onFocus}
            />
          </div>
        ))}
      </div>
    </ComponentContainer>
  );
};
