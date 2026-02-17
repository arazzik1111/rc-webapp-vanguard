import { Button, ButtonProps, ButtonTypes } from '@vanguard/Button/Button';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import React from 'react';

import styles from './ActionBarFooter.module.scss';

/**
 * Types
 */

export type ActionBarFooterButton = {
  text: string;
  onClick: () => void;
  props?: ButtonProps;
};

// PROPS
export type ActionBarFooterProps = {
  buttons: ActionBarFooterButton[];
};

/**
 * Component
 * @todo This is an example implementation base on the Flow Footer design. Re-think it when proper Concept available
 */
export const ActionBarFooter = (props: ActionBarFooterProps) => {
  const { buttons } = props;
  return (
    <ComponentContainer
      testId={'ActionBarFooter_Container'}
      className={buttons.length === 2 ? styles.container : styles.containerCenter}
    >
      {buttons.map((footerButton, idx) => {
        return (
          <Button
            key={idx}
            testId={`ActionBarFooter_${idx}`}
            onClick={footerButton.onClick}
            type={idx === buttons.length - 1 ? ButtonTypes.primary : ButtonTypes.secondary}
            {...footerButton.props}
          >
            {footerButton.text}
          </Button>
        );
      })}
    </ComponentContainer>
  );
};
