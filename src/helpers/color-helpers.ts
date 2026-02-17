import { hexToRgba } from './hex-to-rgba';
import { resolveCssVariable } from './resolve-css-variables';

/**
 * Generate Colors based on Initials
 */
const ColorsArray = [
  '--p500',
  '--p600',
  '--p700',
  '--p800',
  '--s400',
  '--s500',
  '--p400',
  '--p500',
  '--w400',
  '--w500',
  '--e400',
  '--e500',
  '--e900',
  '--a1500',
  '--a1900',
  '--a1900',
  '--a2500',
  '--a2900',
  '--a3500',
  '--a3900',
];

export const generateColorFromInitials = (initials: string[]): string => {
  let asciiResult = 0;
  initials.forEach((value: string) => {
    asciiResult += value.charCodeAt(0) % 20;
  });
  return ColorsArray[Math.floor(asciiResult / 2)];
};

/**
 * Parses a color string, resolving CSS variables if possible.
 * @param color - The color string to parse
 * @returns The resolved color string
 */
export const parseColor = (color: string): string => {
  if (color.startsWith('--')) {
    const resolved = resolveCssVariable(color);
    if (resolved !== color) return resolved; // if resolved to actual value
    return `var(${color})`; // else wrap
  }
  if (color.startsWith('var(')) {
    const match = color.match(/var\((--[^)]+)\)/);
    if (match) {
      const resolved = resolveCssVariable(match[1]);
      if (resolved !== match[1]) return resolved;
      return color;
    }
    return color;
  }
  return color;
};

/**
 * Applies opacity to a color string.
 * @param color - The color string
 * @param opacity - The opacity value (0-1)
 * @returns The color with opacity applied
 */
export const applyOpacity = (color: string, opacity: number): string => {
  if (color.startsWith('rgba(')) {
    const match = color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
    if (match) {
      const [, r, g, b] = match;
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
  }
  if (color.startsWith('rgb(')) {
    const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (match) {
      const [, r, g, b] = match;
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
  }
  if (color.startsWith('#')) {
    return hexToRgba(color, opacity);
  }
  // For CSS variables or other formats, return as is
  return color;
};
