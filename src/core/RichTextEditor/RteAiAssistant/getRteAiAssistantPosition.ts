const VERTICAL_GAP = 20;
const HORIZONTAL_OFFSET = 5;

export function getFloatingElemPosition(targetRect: DOMRect, floatingElem: HTMLElement, anchorElem: HTMLElement) {
  const scrollerElem = anchorElem.parentElement;

  if (!scrollerElem) {
    console.error('setFloatingElemPosition: no scroller element found');
    return { x: -10000, y: -10000 };
  }

  const anchorElementRect = anchorElem.getBoundingClientRect();

  let top = targetRect.bottom + VERTICAL_GAP;
  let left = targetRect.left - HORIZONTAL_OFFSET;

  top -= anchorElementRect.top;
  left -= anchorElementRect.left;

  return {
    y: Math.round(top),
    x: Math.round(left),
  };
}
