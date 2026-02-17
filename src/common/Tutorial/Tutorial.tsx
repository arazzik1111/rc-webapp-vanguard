import { Modal } from '@vanguard/Modal/Modal';
import { ModalHeader } from '@vanguard/Modal/Modalheader/ModalHeader';
import { StandardModalProps } from '@vanguard/Modal/ModalRoot/ModalRoot';
import { ModalStepper, Step } from '@vanguard/Modal/ModalStepper/ModalStepper';
import React, { useMemo } from 'react';

export type TutorialProps = {
  steps: Step[];
  modalWidth?: string;
  modalPosition?: 'top' | 'center' | 'bottom';
} & StandardModalProps<boolean>;

export const Tutorial = (props: TutorialProps) => {
  const { steps, close, modalWidth, modalPosition } = props;

  const tutorialStepperConfig: Step[] = useMemo(
    () =>
      steps
        ? steps.map((step) => ({
            name: step.name,
            component: step.component,
            footerOptions: step?.footerOptions,
          }))
        : [],
    [steps],
  );

  return (
    <Modal width={modalWidth} modalPosition={modalPosition} {...props}>
      <ModalHeader hideCloseButtonOnMobile={false} closeFn={close} type={'default'} hideTypeIcon={true} />
      <ModalStepper stepperStepsPosition={'center'} steps={tutorialStepperConfig} variant={'bottom'} />
    </Modal>
  );
};
