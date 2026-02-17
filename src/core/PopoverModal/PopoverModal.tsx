import { Popper } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import React, { useEffect, useRef, useState } from 'react';

import styles from './PopoverModal.module.scss';

/**
 * Top navigation has 1030 so we need at least that
 * This can be modified if we fin any other exceptions
 * */
const Z_INDEX_TO_APPEAR_ABOVE_ALL_ELEMENTS = 1030;

export interface PopoverModalProps {
  content: React.ReactNode;
  placement?: 'top' | 'auto' | 'bottom';
  isOpen: boolean;
  centerPopover?: boolean;
  openOnHover?: boolean;
  dimRestOfPage?: boolean;
  anchorEl?: HTMLDivElement | HTMLElement | null;
  onClose?: () => void;
  disableBackdropClick?: boolean;
  zIndex?: number;
  renderInPortal?: boolean;
}

export const PopoverModal = (props: PopoverModalProps) => {
  const {
    content,
    isOpen,
    openOnHover,
    dimRestOfPage = false,
    onClose,
    disableBackdropClick = false,
    zIndex = 0, // default zIndex value
    centerPopover,
    placement = 'top',
    renderInPortal = false,
  } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLDivElement | HTMLElement>(props.anchorEl ?? null);
  const [offset, setOffset] = useState<[number, number]>([0, 0]);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setAnchorEl(props.anchorEl ?? null);
  }, [props.anchorEl]);

  useEffect(() => {
    if (anchorEl && containerRef.current) {
      const anchorHeight = anchorEl.getBoundingClientRect().height;
      const containerHeight = containerRef.current.getBoundingClientRect().height;
      setOffset([0, -anchorHeight / 2 - containerHeight / 2]);
    }
  }, [anchorEl, content]);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (openOnHover && !isOpen) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMouseLeave = () => {
    if (openOnHover && !isOpen) {
      setAnchorEl(null);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!openOnHover && !isOpen) {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    if (onClose) {
      onClose();
    }
  };

  const handleBackdropMouseDown = (event: React.MouseEvent) => {
    if (!disableBackdropClick) {
      handleClose();
    }
    event.stopPropagation();
  };

  const centerPopoverModifiers = centerPopover
    ? [
        {
          name: 'flip',
          options: {
            altBoundary: true,
            rootBoundary: 'viewport',
            padding: 8,
          },
        },
        {
          name: 'preventOverflow',
          options: {
            altAxis: true,
            tether: true,
          },
        },
        {
          name: 'offset',
          options: {
            offset: offset,
          },
        },
        {
          name: 'computeStyles',
          options: {
            gpuAcceleration: false,
          },
        },
      ]
    : [];

  const open = isOpen || Boolean(anchorEl);

  console.log('anchorEl', anchorEl);
  if (!anchorEl) {
    return null;
  }
  return (
    <>
      {dimRestOfPage && (
        <Backdrop
          open={open}
          className={styles.backdrop}
          onMouseDown={handleBackdropMouseDown}
          sx={{ zIndex: zIndex + Z_INDEX_TO_APPEAR_ABOVE_ALL_ELEMENTS }}
        />
      )}
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        disablePortal={!renderInPortal}
        style={{ zIndex: zIndex + Z_INDEX_TO_APPEAR_ABOVE_ALL_ELEMENTS + 1 }} // Set z-index higher than backdrop
        modifiers={[...centerPopoverModifiers]}
      >
        <span ref={containerRef} style={{ position: 'relative', zIndex: zIndex + 1 }}>
          {content}
        </span>
      </Popper>
    </>
  );
};
