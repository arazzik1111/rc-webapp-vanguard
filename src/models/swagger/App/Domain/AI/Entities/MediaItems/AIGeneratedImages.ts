import { Event } from '@models/swagger/App/Domain/Presence/Entities/Locations/Events/Event';
import { PostMediaItem } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/MediaItems/PostMediaItem';
import { Post } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/Post';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const AIGeneratedImagesStyle = {
  realistic: 'realistic',
  illustration: 'illustration',
  sketch: 'sketch',
};

export const AIGeneratedImagesContrast = {
  low: 'low',
  medium: 'medium',
  high: 'high',
};

export const AIGeneratedImagesColorMode = {
  blackAndWhite: 'blackAndWhite',
  color: 'color',
  sepia: 'sepia',
};

export const AIGeneratedImagesObjectType = {
  App_Domain_AI_Entities_MediaItems_AIGeneratedImages: 'App\\Domain\\AI\\Entities\\MediaItems\\AIGeneratedImages',
};

export type AIGeneratedImages = {
  prompt?: string;
  /**
   *
   *  Allowed Values:
   * -   `realistic`
   * -   `illustration`
   * -   `sketch`
   *
   */
  style?: (typeof AIGeneratedImagesStyle)[keyof typeof AIGeneratedImagesStyle];
  /**
   *
   *  Allowed Values:
   * -   `low`
   * -   `medium`
   * -   `high`
   *
   */
  contrast?: (typeof AIGeneratedImagesContrast)[keyof typeof AIGeneratedImagesContrast];
  /**
   *
   *  Allowed Values:
   * -   `blackAndWhite`
   * -   `color`
   * -   `sepia`
   *
   */
  colorMode?: (typeof AIGeneratedImagesColorMode)[keyof typeof AIGeneratedImagesColorMode];
  /**
   * keywords
   */
  keywords?: string[];
  /**
   * business context
   */
  businessContext?: string;
  /**
   * The Post ID
   */
  postId?: number;
  post?: Post | Event;
  elements?: PostMediaItem[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AIGeneratedImagesObjectType)[keyof typeof AIGeneratedImagesObjectType];
  changeHistory?: ChangeHistory;
};
