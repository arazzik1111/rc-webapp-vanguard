import './AcceptModal.scss';

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

export const AcceptModal = (props: Props) => {
  const {
    close,
    message,
    title,
    positiveCtaText,
    headerType,
    positiveIconLeft,
    replacements,
    hideHeaderCloseBtn = false,
  } = props;
  return (
    <ComponentContainer className={'AcceptModal-container'}>
      <Modal className="accept-modal" width={'672px'}>
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
          buttonsPosition={'center'}
          positive={{
            cta: () => {
              close({
                isOk: true,
              });
            },
            text: positiveCtaText === '' ? 'Yes' : (positiveCtaText ?? 'Yes'),
            icon: positiveIconLeft ?? undefined,
          }}
        />
      </Modal>
    </ComponentContainer>
  );
};
