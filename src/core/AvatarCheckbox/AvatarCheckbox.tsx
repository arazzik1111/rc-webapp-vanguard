import { useHover } from '@custom-hooks/use-hover';
import { classNames } from '@helpers/classNames';
import { Avatar, AvatarIcon, AvatarProps } from '@vanguard/Avatar/Avatar';
import { CheckBox } from '@vanguard/CheckBox/CheckBox';
import { Form } from '@vanguard/Form/Form';
import { Popover } from '@vanguard/Popover/Popover';
import { Render } from '@vanguard/Render/Render';
import { TextReplacements } from '@vanguard/Text/Text';
import React, { useEffect, useRef, useState } from 'react';

import styles from './AvatarCheckbox.module.scss';

export interface AvatarCheckboxProps {
  onChange?: (e: boolean) => void;
  checked?: boolean;
  /**
   * Form config of the parent form
   * obtained by {formConfig} = useFormConfig
   * */
  formConfig?: any;
  /**
   * Form config of checkbox element
   * formConfig.${stateName}
   * */
  checkboxFormConfig?: any;
  replacements?: TextReplacements;
  popoverMessage?: string;
  disabled?: boolean;
  icon?: AvatarIcon;
  image?: string;
}

export const AvatarCheckbox = (props: AvatarCheckboxProps) => {
  const {
    popoverMessage,
    disabled,
    formConfig,
    replacements,
    onChange,
    checked: checkedProps,
    icon,
    image,
    checkboxFormConfig,
  } = props;
  const [checked, setChecked] = useState<boolean>(checkedProps ?? false);
  const ref = useRef(null);
  const isHovered = useHover(ref);
  const avatarProps: AvatarProps = icon
    ? {
        size: 'large',
        image: null,
        icon: icon,
      }
    : {
        size: 'large',
        image: image ?? '',
        icon: null,
      };

  // useEffect(() => {
  //   if (disabled) {
  //     return;
  //   }
  //   onChange && onChange(checked);
  // }, [checked]);

  useEffect(() => {
    setChecked(checkedProps ?? false);
  }, [checkedProps]);

  return (
    <Form config={formConfig}>
      <div
        ref={ref}
        data-testid={'avatar-checkbox-container'}
        className={classNames(
          styles.container,
          isHovered ? styles.hovered : undefined,
          checked ? styles.checked : undefined,
          disabled ? styles.disabled : undefined,
        )}
        onClick={(e) => {
          if (disabled) {
            return;
          }
          setChecked(!checked);
          onChange && onChange(!checked);

          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <Popover message={popoverMessage} replacements={replacements}>
          <>
            <span
              data-testid={'avatar-checkbox-test-id'}
              className={styles.avatar}
              onClick={() => {
                if (disabled) {
                  return;
                }
                setChecked((prev) => {
                  onChange && onChange(!prev);
                  return !prev;
                });
              }}
            >
              <Avatar {...avatarProps} size={'medium-40'} greyScale={disabled && !checked} />
            </span>
            <Render if={!disabled} keepInDom={true}>
              <span className={classNames(styles.checkbox, checked ? styles.checked : undefined)}>
                <CheckBox
                  testId={'vanguard-checkbox-container-test-id'}
                  hovered={isHovered}
                  disabled={disabled}
                  _hoverMode={'check'}
                  formconfig={checkboxFormConfig}
                  _size={'small'}
                  onChange={(e) => {
                    setChecked(e.target.checked);
                    onChange && onChange(e.target.checked);
                    console.log('CHANGE TRIGGERED!!!', e.target.checked);
                    // e.preventDefault();
                  }}
                  checked={checked}
                  backgroundColor={'--fn-bg'}
                />
              </span>
            </Render>
          </>
        </Popover>
      </div>
    </Form>
  );
};
