import { Collapse as BaseCollapse } from '@mui/material';
import React from 'react';

type Props = {
  isOpen: boolean;
  orientation?: 'vertical' | 'horizontal';
  children: React.ReactNode;
  className?: string;
};

export const Collapse = (props: Props) => {
  const { isOpen, children, className, orientation } = props;

  return (
    <BaseCollapse in={isOpen} className={className} orientation={orientation}>
      {children}
    </BaseCollapse>
  );
};
