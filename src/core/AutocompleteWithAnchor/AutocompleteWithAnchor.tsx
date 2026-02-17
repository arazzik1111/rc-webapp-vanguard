import { p1 } from '@globalStyles';
import { classNames } from '@helpers/classNames';
import { ClickAwayListener } from '@mui/material';
import { Autocomplete, AutocompleteProps } from '@vanguard/Autocomplete/Autocomplete';
import { PopoverPopper } from '@vanguard/Popover/PopoverPopper/PopoverPopper';
import React, { useEffect, useRef } from 'react';

import styles from './AutocompleteWithAnchor.module.scss';

export interface AutocompleteWithAnchorProps {
  children: React.ReactNode;
  autocompleteProps: AutocompleteProps;
  onOpenChange?: (openStatus: boolean) => void;
  searchVisbile?: boolean;
}

export const AutocompleteWithAnchor = (props: AutocompleteWithAnchorProps) => {
  const { children, autocompleteProps, onOpenChange } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (anchorEl && inputRef.current) {
        inputRef.current?.focus();
      }
    }, 0);
    onOpenChange && onOpenChange(Boolean(anchorEl));
  }, [anchorEl, inputRef]);

  const handleClose = () => {
    if (anchorEl) {
      anchorEl.focus();
    }

    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  if (!children) {
    return null;
  }
  return (
    <div style={{ cursor: 'pointer', zIndex: 20 }}>
      <div onClick={handleClick}>{children}</div>
      <PopoverPopper
        className={classNames(styles.autocompleteContent, p1)}
        style={{ width: anchorEl ? anchorEl.clientWidth : '' }}
        open={open}
        anchorEl={anchorEl}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            <Autocomplete inputRef={inputRef} {...autocompleteProps} />
          </div>
        </ClickAwayListener>
      </PopoverPopper>
    </div>
  );
};
