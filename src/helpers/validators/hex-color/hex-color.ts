/**
 * Validates if a string is a valid hex color
 * @param value - The string to validate
 * @returns boolean - true if valid hex color, false otherwise
 */
export const isValidHexColor = (value: string): boolean => {
  if (!value || typeof value !== 'string') {
    return false;
  }

  // Remove whitespace
  const trimmed = value.trim();

  // Check if it's a valid hex color pattern
  const hexPattern = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return hexPattern.test(trimmed);
};

/**
 * Normalizes a hex color string to full 6-digit format with # prefix
 * @param value - The hex color string to normalize
 * @returns string - Normalized hex color or empty string if invalid
 */
export const normalizeHexColor = (value: string): string => {
  if (!isValidHexColor(value)) {
    return '';
  }

  const trimmed = value.trim();
  let hex = trimmed.startsWith('#') ? trimmed.slice(1) : trimmed;

  // Convert 3-digit hex to 6-digit
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('');
  }

  return `#${hex.toLowerCase()}`;
};
