import './ConfirmModal.scss';

import { dFlexColumn } from '@globalStyles';
import { classNames } from '@helpers/classNames';
import { Text, TextReplacements, TextTypes } from '@vanguard/Text/Text';
import React from 'react';

import { ComponentContainer } from '../../ComponentContainer/ComponentContainer';
import { Modal } from '../../Modal/Modal';
import { ModalBody } from '../../Modal/ModalBody/ModalBody';
import { ModalFooter } from '../../Modal/ModalFooter/ModalFooter';
import { ModalHeader } from '../../Modal/Modalheader/ModalHeader';
import { StandardModalProps } from '../../Modal/ModalRoot/ModalRoot';

type Props = {
  replacements?: TextReplacements;
} & StandardModalProps<null>;

export const ConfirmModal = (props: Props) => {
  const {
    close,
    message,
    title,
    positiveCtaText,
    negativeCtaText,
    headerType,
    positiveIconLeft,
    replacements,
    customNegativeFn,
    hideHeaderCloseBtn = false,
  } = props;
  return (
    <ComponentContainer className={'ConfirmModal-container'}>
      <Modal className="confirm-modal" width={'672px'}>
        <ModalHeader
          hideHeaderCloseBtn={hideHeaderCloseBtn}
          type={headerType}
          closeFn={close}
          title={title}
          replacements={replacements}
        />
        <ModalBody>
          <div className={classNames(dFlexColumn)}>
            {typeof message === 'string' ? (
              <Text textAlign={'center'} type={TextTypes.text} replacements={replacements}>
                {message}
              </Text>
            ) : (
              message
            )}
          </div>
        </ModalBody>
        <ModalFooter
          positive={{
            cta: () => {
              close({
                isOk: true,
              });
            },
            text: positiveCtaText === '' ? 'Yes' : (positiveCtaText ?? 'Yes'),
            icon: positiveIconLeft ?? undefined,
          }}
          negative={{
            cta: customNegativeFn
              ? customNegativeFn
              : () => {
                  close({
                    isOk: false,
                  });
                },
            text: negativeCtaText === '' ? 'No' : (negativeCtaText ?? 'No'),
          }}
        />
      </Modal>
    </ComponentContainer>
  );
};
