import { pb3 } from '@globalStyles';
import { classNames } from '@helpers/classNames';
import { IconNames } from '@vanguard/Icon/IconNames';
import { Modal } from '@vanguard/Modal/Modal';
import { ModalBody } from '@vanguard/Modal/ModalBody/ModalBody';
import { ModalFooter } from '@vanguard/Modal/ModalFooter/ModalFooter';
import { ModalHeader } from '@vanguard/Modal/Modalheader/ModalHeader';
import { ModalResponse } from '@vanguard/Modal/ModalResponse';
import { Text, TextTypes } from '@vanguard/Text/Text';
import React, { useEffect, useState } from 'react';

import styles from './BigAssEditModal.module.scss';

interface Props {
  testId?: string;
  title: string;
  description: string;
  children: React.ReactNode;
  savingInProgress: boolean;
  close: (response?: ModalResponse<any>) => void;
  savable: boolean;
  closeOnSave?: boolean;
  saveCallback: () => void;
  cancelCallback: () => void;
  bodyClassName?: string;
}

export const BigAssEditModal = (props: Props) => {
  const {
    testId,
    title,
    description,
    children,
    saveCallback,
    cancelCallback,
    savable,
    close,
    closeOnSave = true,
    savingInProgress,
    bodyClassName,
  } = props;
  const [modalLoading, setModalLoading] = useState(false);

  /**
   * Effect: savingInProgress
   */
  useEffect(() => {
    if (modalLoading && !savingInProgress) {
      setModalLoading(false);

      if (closeOnSave) {
        close({
          isOk: true,
        });
      }
    }
  }, [savingInProgress]);

  /**
   * Event: Positive Button Click
   */
  const positiveFn = () => {
    setModalLoading(true);
    saveCallback && saveCallback();
  };

  /**
   * Event: Negative Button Click
   */
  const negativeFn = () => {
    cancelCallback && cancelCallback();
    close({ isOk: false });
  };

  return (
    <Modal testId={testId} fullscreen={true}>
      <ModalHeader>
        <Text type={TextTypes.heading1} className={pb3}>
          {title}
        </Text>
        <Text type={TextTypes.textIntro}>{description}</Text>
      </ModalHeader>

      <ModalBody className={classNames(styles.body, bodyClassName)}>{children}</ModalBody>

      <ModalFooter
        buttonsPosition={'between'}
        positive={{
          cta: positiveFn,
          text: 'Save',
          icon: IconNames.save,
          isLoading: modalLoading,
          disabled: !savable,
        }}
        negative={{
          cta: negativeFn,
          text: 'Cancel',
        }}
      />
    </Modal>
  );
};
