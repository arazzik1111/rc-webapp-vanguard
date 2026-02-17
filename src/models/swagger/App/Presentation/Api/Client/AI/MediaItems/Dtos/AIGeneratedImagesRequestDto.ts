import { LocationKeywords } from '@models/swagger/App/Domain/Presence/Entities/Locations/Keywords/LocationKeywords';

export const AIGeneratedImagesRequestDtoStyle = {
  realistic: 'realistic',
  illustration: 'illustration',
  sketch: 'sketch',
};

export const AIGeneratedImagesRequestDtoStyleStrict = {
  realistic: 'realistic',
  illustration: 'illustration',
  sketch: 'sketch',
} as const;

export const AIGeneratedImagesRequestDtoContrast = {
  low: 'low',
  medium: 'medium',
  high: 'high',
};

export const AIGeneratedImagesRequestDtoContrastStrict = {
  low: 'low',
  medium: 'medium',
  high: 'high',
} as const;

export const AIGeneratedImagesRequestDtoColorMode = {
  blackAndWhite: 'blackAndWhite',
  color: 'color',
  sepia: 'sepia',
};

export const AIGeneratedImagesRequestDtoColorModeStrict = {
  blackAndWhite: 'blackAndWhite',
  color: 'color',
  sepia: 'sepia',
} as const;

export type AIGeneratedImagesRequestDto = {
  keywords?: LocationKeywords;
  prompt?: string;
  /**
   * The AI Image style
   *  Allowed Values:
   * -   `realistic`
   * -   `illustration`
   * -   `sketch`
   *
   */
  style?: (typeof AIGeneratedImagesRequestDtoStyle)[keyof typeof AIGeneratedImagesRequestDtoStyle];
  /**
   * The AI Image contrast mode
   *  Allowed Values:
   * -   `low`
   * -   `medium`
   * -   `high`
   *
   */
  contrast?: (typeof AIGeneratedImagesRequestDtoContrast)[keyof typeof AIGeneratedImagesRequestDtoContrast];
  postId: number;
  /**
   * The AI Image color mode
   *  Allowed Values:
   * -   `blackAndWhite`
   * -   `color`
   * -   `sepia`
   *
   */
  colorMode?: (typeof AIGeneratedImagesRequestDtoColorMode)[keyof typeof AIGeneratedImagesRequestDtoColorMode];
};
