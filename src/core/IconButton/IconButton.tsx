import { useHover } from '@custom-hooks/use-hover';
import { classNames } from '@helpers/classNames';
import { Icon } from '@vanguard/Icon/Icon';
import { IconNames } from '@vanguard/Icon/IconNames';
import { Popover } from '@vanguard/Popover/Popover';
import React, { useEffect, useRef, useState } from 'react';
import { animated, useSpring } from 'react-spring';

import styles from './IconButton.module.scss';

export interface IconButtonProps {
  isActive: boolean;
  onHover?: (isHovered: boolean) => void;
  onClick?: () => void;
  icon: IconNames;
  message?: string;
  isDisabled?: boolean;
  isSpinning?: boolean;
}

export const IconButton = (props: IconButtonProps) => {
  const { isActive, onHover, onClick, icon, message, isDisabled, isSpinning } = props;
  const iconHoverRef = useRef<HTMLDivElement>(null);
  const isHovered = useHover(iconHoverRef);
  const toOpacity = (c: string, o = 1) => `rgb(from var(${c}) r g b / ${o})`;
  const colorBlue = toOpacity('--fn-fg-cta');
  const colorGrey = toOpacity('--fn-fg-light');
  const colorWhite = toOpacity('--fn-bg');
  const colorBlueBg = toOpacity('--fn-bg-hov-p-gl', 0.32);

  const [iconColorValue, setIconColorValue] = useState(isActive ? colorBlue : colorGrey);

  useEffect(() => {
    onHover?.(isHovered);
  }, [isHovered, onHover]);

  let finalBg = colorWhite;
  let finalIcon = colorGrey;
  let finalCursor = 'pointer';

  if (isActive) {
    finalBg = colorBlueBg;
    finalIcon = colorBlue;
    finalCursor = isDisabled ? 'not-allowed' : 'pointer';
  } else if (isDisabled) {
    finalBg = colorWhite;
    finalIcon = colorGrey;
    finalCursor = 'not-allowed';
  } else {
    finalBg = isHovered ? colorBlueBg : colorWhite;
    finalIcon = colorGrey;
    finalCursor = 'pointer';
  }
  const containerSpring = useSpring({
    backgroundColor: finalBg,
    config: { tension: 200, friction: 20 },
  });

  const iconSpring = useSpring({
    color: isActive ? colorBlue : finalIcon,
    config: { tension: 200, friction: 20 },
    onChange: (ani) => {
      if (ani.value.color) {
        setIconColorValue(ani.value.color);
      }
    },
  });

  return (
    <Popover message={message}>
      <animated.div
        ref={iconHoverRef}
        style={{ ...containerSpring, cursor: finalCursor }}
        className={classNames(styles.btn, isActive && styles.active)}
        onClick={!isDisabled ? onClick : undefined}
        role="button"
        tabIndex={isDisabled ? -1 : 0}
      >
        <animated.span style={iconSpring}>
          <Icon forceSize={16} color={iconColorValue} spin={isSpinning}>
            {icon}
          </Icon>
        </animated.span>
      </animated.div>
    </Popover>
  );
};
