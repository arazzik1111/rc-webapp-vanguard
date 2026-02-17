import { IconNames } from '@vanguard/Icon/IconNames';
import { ModalResponse } from '@vanguard/Modal/ModalResponse';
import { FontWeights, Text, TextReplacements, TextTypes } from '@vanguard/Text/Text';
import React, { useEffect, useState } from 'react';

import { Modal } from '../../Modal/Modal';
import { ModalBody } from '../../Modal/ModalBody/ModalBody';
import { ModalFooter } from '../../Modal/ModalFooter/ModalFooter';
import { ModalHeader } from '../../Modal/Modalheader/ModalHeader';
import styles from './EditModal.module.scss';

export interface EditModalProps {
  title: string;
  titleReplacements?: TextReplacements;
  testId?: string;
  children: React.ReactNode;
  positiveBtnText?: string;
  showPositiveBtnIcon?: boolean;
  showFooterTopBorder?: boolean;

  savingInProgress: boolean;
  requestGotError?: boolean;

  close: (response?: ModalResponse<any>) => void;

  savable: boolean;
  closeOnSave?: boolean;
  closeOnError?: boolean;
  saveCallback: () => void;

  cancelCallback: () => void;
  width?: string;
}

export const EditModal = (props: EditModalProps) => {
  const {
    title,
    titleReplacements,
    children,
    positiveBtnText = 'Save',
    showPositiveBtnIcon,
    showFooterTopBorder,
    saveCallback,
    cancelCallback,
    savable,
    close,
    closeOnSave = true,
    closeOnError = false,
    savingInProgress,
    testId,
    width = '672px',
    requestGotError = false,
  } = props;
  const [modalLoading, setModalLoading] = useState(false);

  /**
   * Effect: savingInProgress
   */
  useEffect(() => {
    if (modalLoading && closeOnSave && !savingInProgress) {
      setModalLoading(false);

      if (!requestGotError) {
        if (closeOnSave) {
          close({
            isOk: true,
            data: {
              requestGotError: requestGotError,
            },
          });
        }
      } else {
        if (closeOnError) {
          close({
            isOk: true,
            data: {
              requestGotError: requestGotError,
            },
          });
        }
      }
    }
  }, [close, closeOnError, closeOnSave, modalLoading, requestGotError, savingInProgress]);

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
    <Modal width={width} className={styles.modal} testId={testId}>
      <ModalHeader closeFn={negativeFn}>
        <Text
          replacements={titleReplacements}
          fontWeight={FontWeights.bold}
          type={TextTypes.heading4}
          className={styles.headerText}
        >
          {title}
        </Text>
      </ModalHeader>
      <ModalBody className={styles.body}>{children}</ModalBody>
      <ModalFooter
        showTopBorder={showFooterTopBorder}
        buttonsPosition={'between'}
        positive={{
          cta: positiveFn,
          text: positiveBtnText,
          icon: showPositiveBtnIcon ? IconNames.save : undefined,
          isLoading: savingInProgress,
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
