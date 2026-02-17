import React from 'react';

import { classNames } from '../../../helpers/classNames';
import { Icon, IconSize } from '../../Icon/Icon';
import { IconNames } from '../../Icon/IconNames';
import styles from './Arrow.module.scss';

export interface ArrowProps {
  style?: ArrowStyle;
  direction: Direction;
  onClick: () => void;
  className?: string;
}

export type ArrowComponentType = (props: ArrowProps) => React.ReactElement;

type Direction = 'left' | 'right';

export type ArrowStyle = Record<string, string>;

export const Arrow = (props: ArrowProps) => {
  const { style, onClick, direction, className = '' } = props;
  return (
    <a onClick={onClick} className={classNames(className, styles.ArrowContainer)}>
      <div
        className={styles.SlideCarouselArrow}
        style={{
          // Padding fixes for icon not beeing ok
          paddingLeft: direction === 'right' ? 2 : 0,
          paddingRight: direction === 'right' ? 0 : 2,
        }}
      >
        <Icon type={IconSize.large}>{direction === 'right' ? IconNames.caretLeft : IconNames.caretRight}</Icon>
      </div>
    </a>
  );
};
