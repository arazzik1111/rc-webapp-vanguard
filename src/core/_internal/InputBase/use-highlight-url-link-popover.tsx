import React, { MouseEvent, useEffect, useState } from 'react';

/**
 * Custom Hook: useHighlightUrlLinkPopover
 */
export const useHighlightUrlLinkPopover = (
  initialValue: string = '',
  popoverMessage: string = 'Click to replace link with test.com',
  popoverHighlight?: { detector: string; variant: string },
) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [linkIndex, setLinkIndex] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState<string>(initialValue);

  // Link detection regex
  const linkRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;

  useEffect(() => {
    setInputValue(initialValue);
  }, [initialValue]);

  const handleMouseEnter = (event: MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setLinkIndex(index);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setLinkIndex(null);
  };

  const handlePopoverClick = () => {
    setInputValue((prevValue) =>
      prevValue.replace(linkRegex, (match, index) => (index === linkIndex ? 'test.com' : match)),
    );
    setAnchorEl(null);
  };

  const renderTextWithLinks = () => {
    if (!popoverHighlight || popoverHighlight.detector !== 'link') return inputValue;

    const parts = inputValue.split(linkRegex);
    return parts.map((part, index) =>
      linkRegex.test(part) ? (
        <span
          key={index}
          onMouseEnter={(e) => handleMouseEnter(e, index)}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundColor: popoverHighlight.variant === 'basicLink' ? 'var(--p100)' : 'inherit',
            color: popoverHighlight.variant === 'basicLink' ? 'var(--p500)' : 'inherit',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return {
    inputValue,
    setInputValue,
    anchorEl,
    handleMouseLeave,
    handlePopoverClick,
    renderTextWithLinks,
    popoverMessage,
  };
};
