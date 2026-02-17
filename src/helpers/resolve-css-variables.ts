/**
 * Resolves CSS custom properties (variables) to their actual values
 * @param cssVar - The CSS variable name (e.g., "--sc-charts-01")
 * @returns The resolved color value or the original value if not found
 */
export const resolveCssVariable = (cssVar: string): string => {
  if (typeof window === 'undefined') {
    return cssVar; // Return as-is for SSR
  }

  try {
    const rootStyle = window.getComputedStyle(document.documentElement);
    const value = rootStyle.getPropertyValue(cssVar).trim();

    // If the value is empty or still a CSS variable, return the original
    if (!value || value.startsWith('--')) {
      return cssVar;
    }

    return value;
  } catch (error) {
    console.warn(`Failed to resolve CSS variable ${cssVar}:`, error);
    return cssVar;
  }
};

/**
 * Resolves an array of CSS variables to their actual values
 * @param cssVars - Array of CSS variable names
 * @returns Array of resolved color values
 */
export const resolveCssVariables = (cssVars: string[]): string[] => {
  return cssVars.map(resolveCssVariable);
};
