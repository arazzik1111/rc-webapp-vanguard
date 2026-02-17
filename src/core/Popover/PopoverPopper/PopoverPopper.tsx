import './PopoverPopper.scss';

import { Popper, PopperProps } from '@mui/material';
import React from 'react';

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * | MUI Popper Wrapper - Used in Popover Component
 * ---------------------------------------------------------------------------------------------------------------------
 * Allows CSS customization using Portals (tooltip will be injected at the end of body)
 *
 */
export const PopoverPopper = (props: PopperProps) => {
  const { className, ...restProps } = props;
  return (
    <Popper
      {...restProps}
      className={`vanguard-popover ${className || ''}`.trim()}
    />
  );
};
