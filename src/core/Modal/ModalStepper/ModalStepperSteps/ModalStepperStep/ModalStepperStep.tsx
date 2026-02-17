import { classNames } from '@helpers/classNames';
import React from 'react';

import styles from './ModalStepperStep.module.scss';

export interface ModalStepperStepProps {
  isActive?: boolean;
}

export const ModalStepperStep = (props: ModalStepperStepProps) => {
  const { isActive } = props;
  const activeClass = isActive ? styles.active : '';

  return <div data-testid={'modal-stepper-step'} className={classNames(styles.step, activeClass)} />;
};
