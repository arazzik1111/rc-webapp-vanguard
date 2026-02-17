import './ModalSplitView.scss';

import { classNames } from '@helpers/classNames';
import React, { useEffect, useState } from 'react';
import { a, useSpring } from 'react-spring';

export type SplitViewElement =
  | {
      component: React.ReactNode;
      fullWidth: string;
      contractedWidth?: string;
      backgroundColor?: string;
    }
  | null
  | undefined;

interface ModalSplitViewProps {
  elements: [SplitViewElement, SplitViewElement];
  autoCloseWidth?: number;
  isContracted: boolean;
}

export const ModalSplitView = (props: ModalSplitViewProps) => {
  const { elements, isContracted, autoCloseWidth = -1 } = props;

  const [firstElement, secondElement] = elements;
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isOpen = autoCloseWidth < width && isContracted;
  const firstElementSlidingProps: any = useSpring({
    width: isOpen ? firstElement?.contractedWidth : firstElement?.fullWidth,
    backgroundColor: firstElement?.backgroundColor ? firstElement?.backgroundColor : 'var(--n000)',
  });

  const secondElementOpacityProps: any = useSpring({
    opacity: isContracted ? 1 : 0,
  });

  return (
    <>
      <a.div
        className={classNames('SplitView-left-component')}
        style={{
          ...firstElementSlidingProps,
        }}
      >
        {firstElement?.component}
      </a.div>

      <a.div
        className={classNames('SplitView-right-component')}
        style={{
          left: firstElement?.contractedWidth,
          width: secondElement?.fullWidth,
          ...secondElementOpacityProps,
        }}
      >
        {secondElement?.component}
      </a.div>
    </>
  );
};
