import { useDynamicImport } from '@custom-hooks/use-dynamic-import/use-dynamic-import';
import { mb2, mb5 } from '@globalStyles';
import { classNames } from '@helpers/classNames';
import { AIOrb, AIOrbSize, AIOrbStatus } from '@vanguard/AIOrb/AIOrb';
import { ModalHeader } from '@vanguard/Modal/Modalheader/ModalHeader';
import { Render } from '@vanguard/Render/Render';
import React from 'react';

import { Modal } from '../../Modal/Modal';
import { ModalBody } from '../../Modal/ModalBody/ModalBody';
import { StandardModalProps } from '../../Modal/ModalRoot/ModalRoot';
import { Text, TextTypes } from '../../Text/Text';
import styles from './LoadingModal.module.scss';

type Props = StandardModalProps<null> & {
  headerTitle?: string;
  loadingAnimation?: 'default' | 'rocket' | 'ai';
};

export const LoadingModal = (props: Props) => {
  const { title, message = 'Loading...', loadingAnimation = 'default', headerTitle } = props;

  let svgIconSrc = '';
  if (loadingAnimation === 'default') {
    svgIconSrc = 'gifs/loading.gif';
  } else if (loadingAnimation === 'rocket') {
    svgIconSrc = 'gifs/rocket.gif';
  }

  const { SvgIcon, loading, error } = useDynamicImport(svgIconSrc);
  return (
    <Modal width={'672px'} {...props}>
      {headerTitle && <ModalHeader title={headerTitle} />}

      <ModalBody className={classNames(styles.modal)}>
        <div className={classNames(styles.imgContainer)}>
          <Render if={loadingAnimation !== 'ai'}>
            <img
              className={classNames(styles.loadingImg, mb5, loadingAnimation === 'rocket' && styles.rocket)}
              src={SvgIcon}
              alt="loading..."
            />
          </Render>
          <Render if={loadingAnimation === 'ai'}>
            <AIOrb size={AIOrbSize.Large} state={AIOrbStatus.Thinking} />
          </Render>
        </div>

        <Text className={classNames(mb2)} type={TextTypes.textIntro} color={'--fn-fg-cta'}>
          {title}
        </Text>
        <Text type={TextTypes.text}>{message ? message : 'Loading...'}</Text>
      </ModalBody>
    </Modal>
  );
};
