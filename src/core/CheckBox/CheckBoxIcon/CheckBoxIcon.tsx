import { classNames } from '@helpers/classNames';
import { Icon, IconSize } from '@vanguard/Icon/Icon';
import { IconNames } from '@vanguard/Icon/IconNames';
import React, { useEffect, useState } from 'react';

import styles from './CheckBoxIcon.module.scss';

export interface CheckBoxIconProps {
  isChecked: boolean;
  intermediate: boolean;
  isHovered?: boolean | undefined;
  hoverMode: 'check' | 'border';
  size: 'small' | 'large';
}

export const CheckBoxIcon = (props: CheckBoxIconProps) => {
  const { isChecked, intermediate, isHovered, hoverMode, size } = props;
  const [show, setShow] = useState(true);

  useEffect(() => {
    let timer: any = -1;
    if (isHovered) {
      timer = setTimeout(() => setShow(true), 10);
    }
    if (isChecked) {
      setShow(true);
    }

    return () => clearTimeout(timer); // Cleanup to prevent memory leaks
  }, [isChecked, intermediate, isHovered, hoverMode]);

  const getIconName = () => {
    if (isHovered && hoverMode === 'check' && !isChecked) return IconNames.check;
    if (!isChecked) return IconNames.check;
    if (intermediate) return IconNames.remove;
    return IconNames.check;
  };

  const getIconColor = () => {
    if (isHovered && hoverMode === 'check' && !isChecked) return '--p300';
    if (!isChecked) return '--fn0bg';
    return '--n000';
  };

  return (
    <Icon
      type={IconSize.small}
      color={getIconColor()}
      className={classNames(styles.checkboxIcon, show ? styles.show : undefined)}
      forceSize={size === 'small' ? 10 : undefined}
    >
      {getIconName()}
    </Icon>
  );
};
