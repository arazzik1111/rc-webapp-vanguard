import { useWindowResize } from '@custom-hooks/use-window.resize';
import { Tooltip } from '@mui/material';
import { TooltipClasses } from '@mui/material/Tooltip/tooltipClasses';
import { PopoverPopper } from '@vanguard/Popover/PopoverPopper/PopoverPopper';
import { Render } from '@vanguard/Render/Render';
import { FontWeights, Text, TextReplacements, TextTypes } from '@vanguard/Text/Text';
import React, { useEffect, useState } from 'react';

export type PopoverTheme = 'default' | 'dark';
export type PopoverPosition = 'bottom' | 'top' | 'left' | 'right';

export interface PopoverProps {
  children: React.ReactElement;
  message?: string | React.ReactNode;
  title?: string | React.ReactNode;
  position?: PopoverPosition;
  maxWidth?: string; // Recommended to not specify, since Popover has a fancy width automation
  arrow?: boolean; // Setting to false will hide the arrow
  wrapChildren?: boolean; // Adds a span wrapper to children (solves ForwardRef issue with custom components)
  interactive?: boolean; // Adds a onLeave delay, so user may hover the Popover (tg. to click on links on it)
  theme?: PopoverTheme;
  replacements?: TextReplacements;
  className?: Partial<TooltipClasses>;
  /**
   * The popover does not appear when the window width is below this given parameter
   */
  hideUnderBreakpoint?: number;
}

/**
 * ---------------------------------------------------------------------------------------------------------------------
 */
export const Popover = (props: PopoverProps) => {
  const {
    children,
    message,
    title,
    position = 'top',
    arrow = true,
    wrapChildren = true,
    maxWidth,
    interactive = false,
    replacements,
    theme = 'dark',
    hideUnderBreakpoint,
    className,
  } = props;

  const width = useWindowResize();
  const [popoverOpen, setIsPopoverOpen] = useState<boolean>(false);

  useEffect(() => {
    if (hideUnderBreakpoint && width < hideUnderBreakpoint) {
      setIsPopoverOpen(false);
    }
  }, []);
  /**
   * Do not apply popover, if no message
   */
  if (!message) {
    return children;
  }

  /**
   * Function: Get Title
   */
  function getTitle() {
    if (typeof message === 'string') {
      return (
        <>
          <Render if={!!title && typeof title === 'string'}>
            <Text replacements={replacements} fontWeight={FontWeights.bold}>
              {title}
            </Text>
          </Render>
          <Text type={TextTypes.textHelp} replacements={replacements}>
            {message}
          </Text>
        </>
      );
    }
    return message ?? '';
  }

  /**
   * Function: Render Children
   */
  function renderChildren() {
    if (wrapChildren) {
      return <span key={1}>{children}</span>;
    }
    return children;
  }

  /**
   * Return View
   * ---
   */
  return (
    <Tooltip
      title={getTitle()}
      arrow={arrow}
      placement={position}
      PopperComponent={PopoverPopper}
      open={popoverOpen}
      classes={className}
      PopperProps={{
        style: { maxWidth: maxWidth },
        className: theme === 'dark' ? 'MuiTooltip-popper-dark' : '',
        placement: position,
      }}
      disableInteractive={!interactive}
      componentsProps={{
        tooltip: {
          style: { maxWidth: maxWidth },
        },
      }}
      onMouseEnter={() => {
        if (hideUnderBreakpoint && width < hideUnderBreakpoint) {
          setIsPopoverOpen(false);
          return;
        }
        setIsPopoverOpen(true);
      }}
      onMouseLeave={() => {
        setIsPopoverOpen(false);
      }}
    >
      {renderChildren()}
    </Tooltip>
  );
};
