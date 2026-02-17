import './Modal.scss';

import { classNames } from '@helpers/classNames';
import { deviceService } from '@services/device.service.ts';
import { ModalOpts } from '@vanguard/Modal/ModalService';
import React from 'react';

type Props = {
  children?: React.ReactNode;
  modalContentClassName?: string;
  disableOutsideClick?: boolean;
} & ModalOpts;

/**
 * Component
 * ---------------------------------------------------------------------------------------------------------------------
 */
export const Modal = (props: Props) => {
  const {
    children,
    className,
    modalPosition = 'top',
    testId,
    onOutsideClick,
    onContentClick,
    modalContentClassName,
    disableOutsideClick,
    backgroundColor,
  } = props;
  let { fullscreen, width, maxWidth, minHeight } = props;

  /**
   * Default Fullscreen value
   */
  if (fullscreen === undefined) {
    fullscreen = deviceService.isMobile();
  }
  if (fullscreen) {
    // Reset width props on fullscreen mode
    width = undefined;
    minHeight = undefined;
    maxWidth = undefined;
  }

  /**
   * Get Classes
   */
  const getContainerClassName = () => {
    const positionClass = `modal-position-${modalPosition}`;
    const fullscreenClass = fullscreen ? 'modal-fullscreen' : '';
    return classNames(positionClass, fullscreenClass, className);
  };

  const getContentStyle = () => {
    return { width: width, maxWidth: maxWidth, backgroundColor: backgroundColor, minHeight };
  };

  /**
   * Return view
   * ---
   */
  return (
    <div
      onClick={(e) => {
        onOutsideClick && onOutsideClick(e);
      }}
      data-testid={testId}
      className={classNames('rc-modal', getContainerClassName())}
    >
      <div
        onClick={(e) => {
          if (!disableOutsideClick) {
            e.stopPropagation();
            onContentClick && onContentClick(e);
          }
        }}
        className={classNames('modal-content', modalContentClassName)}
        style={getContentStyle()}
      >
        {children}
      </div>
    </div>
  );
};
export type { Props as ModalProps };
