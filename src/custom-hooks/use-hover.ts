import { MutableRefObject, useEffect, useState } from 'react';

export function useHover(ref: MutableRefObject<any>, delay: number = 0): boolean {
  const [hovered, setHovered] = useState(false);
  let hoverTimeout: NodeJS.Timeout | null = null;

  const handleMouseOver = () => {
    if (delay > 0) {
      hoverTimeout = setTimeout(() => setHovered(true), delay);
    } else {
      setHovered(true);
    }
  };

  const handleMouseOut = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      hoverTimeout = null;
    }
    setHovered(false);
  };

  useEffect(() => {
    const node: any = ref.current;
    if (node) {
      if (node.addEventListener) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
      } else if (node.addListener) {
        node.addListener('mouseover', handleMouseOver);
        node.addListener('mouseout', handleMouseOut);
      } else if (node.marker) {
        node.marker.addListener('mouseover', handleMouseOver);
        node.marker.addListener('mouseout', handleMouseOut);
      }

      return () => {
        if (node.removeEventListener) {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        } else if (node.marker && node.marker.removeListener) {
          node.marker.removeListener('mouseover', handleMouseOver);
          node.marker.removeListener('mouseout', handleMouseOut);
        }
      };
    }
  }, [ref.current, delay]);

  return hovered;
}
