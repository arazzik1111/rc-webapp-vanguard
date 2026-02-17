import { InfoIconModal } from '@common/InfoIcon/InfoIconModal/InfoIconModal';
import { breakpoints } from '@config/breakpoints';
import { useWindowResize } from '@custom-hooks/use-window.resize';
import { Icon, IconSize } from '@vanguard/Icon/Icon';
import { IconNames } from '@vanguard/Icon/IconNames';
import { ModalService } from '@vanguard/Modal/ModalService';
import { Popover, PopoverPosition, PopoverTheme } from '@vanguard/Popover/Popover';
import { TextReplacements } from '@vanguard/Text/Text';
import React, { useState } from 'react';

import styles from './InfoIcon.module.scss';

export interface InfoIconProps {
  size?: IconSize;
  message?: string | React.ReactNode;
  replacements?: TextReplacements;
  title?: string | React.ReactNode;
  position?: PopoverPosition;
  theme?: PopoverTheme;
  maxWidth?: string;
  handleClick?: (event: React.MouseEvent) => void;
  testId?: string;
  modalBackgroundColor?: string;
  hasModalPuller?: boolean;
  icon?: IconNames;
}

export const InfoIcon = (props: InfoIconProps) => {
  const {
    message,
    size = IconSize.large,
    title,
    replacements,
    testId,
    maxWidth,
    modalBackgroundColor,
    hasModalPuller,
    icon = IconNames.info,
  } = props;

  const [modalId, setModalId] = useState<string>('');
  const width = useWindowResize();

  const openPreview = () => {
    const modalId = ModalService.open(
      <InfoIconModal
        hasPuller={hasModalPuller}
        backgroundColor={modalBackgroundColor}
        title={title}
        message={message}
        replacements={replacements}
        onTouchEnd={() => {
          ModalService.closeEv(modalId);
        }}
        onOutsideClick={() => {
          ModalService.closeEv(modalId);
        }}
      />,
    );
    return modalId;
  };

  const handleClick = () => {
    if (width <= breakpoints.tablet) {
      const id = openPreview();
      setModalId(id);
    } else {
    }
  };

  return (
    <Popover
      data-testid={`${testId}-`}
      replacements={replacements}
      position={'top'}
      message={message}
      hideUnderBreakpoint={breakpoints.desktop}
    >
      <span data-testid={testId} className={styles.container}>
        <Icon
          onClick={handleClick}
          color={'--n400'}
          hoverColor={'--n500'}
          hasCircle={true}
          fillColor={'--n200'}
          type={size}
          className={styles.icon}
        >
          {icon}
        </Icon>
      </span>
    </Popover>
  );
};
