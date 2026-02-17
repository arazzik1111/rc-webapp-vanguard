import { alignItemsCenter, dFlexColumn, pb4 } from '@globalStyles';
import { classNames } from '@helpers/classNames';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { Modal } from '@vanguard/Modal/Modal';
import { ModalBody } from '@vanguard/Modal/ModalBody/ModalBody';
import { ModalFooter } from '@vanguard/Modal/ModalFooter/ModalFooter';
import { ModalHeader } from '@vanguard/Modal/Modalheader/ModalHeader';
import { StandardModalProps } from '@vanguard/Modal/ModalRoot/ModalRoot';
import { FontWeights, Text, TextTypes } from '@vanguard/Text/Text';
import React from 'react';

type Props = StandardModalProps<null>;

export const SuccessModal = (props: Props) => {
  const { close, title, message, ctaPositive } = props;

  return (
    <ComponentContainer>
      <Modal {...props} className="success-modal" width={'640px'}>
        <ModalHeader type={'success'}>
          <Text type={TextTypes.heading4} fontWeight={FontWeights.bold}>
            {title}
          </Text>
        </ModalHeader>

        <ModalBody>
          {typeof message === 'string' ? (
            <div className={classNames(dFlexColumn, alignItemsCenter, pb4)}>
              <Text type={TextTypes.textIntro} textAlign={'center'} fontWeight={FontWeights.medium}>
                {message}
              </Text>
            </div>
          ) : (
            message
          )}
        </ModalBody>
        {ctaPositive && <ModalFooter positive={ctaPositive} buttonsPosition={'center'} />}
      </Modal>
    </ComponentContainer>
  );
};
