import { classNames } from '@helpers/classNames';
import { Modal } from '@vanguard/Modal/Modal';
import { ModalBody } from '@vanguard/Modal/ModalBody/ModalBody';
import { ModalHeader } from '@vanguard/Modal/Modalheader/ModalHeader';
import { FontWeights, Text, TextReplacements, TextTypes } from '@vanguard/Text/Text';
import React, { ReactNode, useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

import styles from './InfoIconModal.module.scss';

export interface InfoIconModalProps {
  message?: string | React.ReactNode;
  title?: string | ReactNode;
  onOutsideClick?: (event: React.MouseEvent) => void;
  onTouchEnd?: (event: React.TouchEvent) => void;
  replacements?: TextReplacements;
  backgroundColor?: string;
  hasPuller?: boolean;
}

export const InfoIconModal = (props: InfoIconModalProps) => {
  const { message, title, onOutsideClick, onTouchEnd, replacements, backgroundColor, hasPuller = true } = props;

  const [startY, setStartY] = useState(0);
  const [{ y }, set] = useSpring(() => ({
    y: 0,
    config: {
      tension: 300,
      friction: 20,
    },
  }));
  //force the background from scrolling when the user is dragging the modal
  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      const currentY = event.touches[0].clientY;
      const deltaY = currentY - startY;
      if (deltaY > 0) {
        document.body.style.overflow = 'hidden';
      }
    };
    const handleTouchEnd = () => {
      document.body.style.overflow = 'auto';
    };
    const handleTouchStart = (event: TouchEvent) => {
      setStartY(event.touches[0].clientY);
    };
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchstart', handleTouchStart);
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchstart', handleTouchStart);
      document.body.style.overflow = 'auto';
    };
  }, [startY]);
  return (
    <animated.div
      onTouchStart={(event) => {
        setStartY(event.touches[0].clientY);
      }}
      onTouchMove={(event) => {
        const diff = event.touches[0].clientY - startY;
        if (diff > 0) {
          set({ y: diff });
        } else {
          set({ y: 0 });
        }
      }}
      onTouchEnd={(e) => {
        setStartY(0);
        if (y.get() > 80) {
          onTouchEnd && onTouchEnd(e);
        } else {
          set({ y: 0 });
        }
      }}
      style={{ transform: y.to((y) => `translate3d(0, ${y}px, 0)`) }}
    >
      <Modal
        backgroundColor={backgroundColor}
        testId={'modal-mobile-test-id'}
        modalPosition={'bottom'}
        fullscreen={false}
        width={'100vw'}
        onOutsideClick={(e) => {
          onOutsideClick && onOutsideClick(e);
        }}
      >
        <ModalHeader>
          {hasPuller && <div className={classNames(styles.infoIconModalPuller)} />}
          {typeof title === 'string' ? (
            <Text fontWeight={FontWeights.bold} type={TextTypes.heading3} color={'--n700'} textAlign={'center'}>
              {title}
            </Text>
          ) : (
            title
          )}
        </ModalHeader>
        <ModalBody>
          {typeof message === 'string' ? (
            <Text
              replacements={replacements}
              fontWeight={FontWeights.regular}
              type={TextTypes.text}
              color={'--n700'}
              textAlign={'center'}
            >
              {message}
            </Text>
          ) : (
            message
          )}
        </ModalBody>
      </Modal>
    </animated.div>
  );
};
