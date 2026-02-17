import { AIMediaItemDownloadConfirmation } from '@models/swagger/App/Domain/AI/Entities/MediaItems/DownloadConfirmation/AIMediaItemDownloadConfirmation';
import { MediaItemContent } from '@models/swagger/DDD/Domain/Common/Entities/MediaItems/MediaItemContent';

export const AIMediaItemType = {
  photo: 'photo',
  video: 'video',
  DOCUMENT: 'DOCUMENT',
};

export const AIMediaItemTypeStrict = {
  photo: 'photo',
  video: 'video',
  DOCUMENT: 'DOCUMENT',
} as const;

export const AIMediaItemObjectType = {
  App_Domain_AI_Entities_MediaItems_AIMediaItem: 'App\\Domain\\AI\\Entities\\MediaItems\\AIMediaItem',
};

export const AIMediaItemObjectTypeStrict = {
  App_Domain_AI_Entities_MediaItems_AIMediaItem: 'App\\Domain\\AI\\Entities\\MediaItems\\AIMediaItem',
} as const;

export type AIMediaItem = {
  /**
   * The description used for the AI Media Item
   */
  description?: string;
  /**
   * The full name of the user who created the media item
   */
  authorFullName?: string;
  /**
   * The referral link of the user who posted the media item
   */
  authorReferralLink?: string;
  downloadConfirmation?: AIMediaItemDownloadConfirmation;
  mediaItemContent?: MediaItemContent;
  /**
   * Public URL of the mediaitem
   */
  publicUrl?: string;
  /**
   * - Represents the number of views
   */
  viewCount?: number;
  /**
   * The type of the mediaitem
   *  Allowed Values:
   * -   `photo`: Photo type for media item
   * -   `video`: Video type for media item
   * -   `DOCUMENT`: Document type for media item
   *
   */
  type?: (typeof AIMediaItemType)[keyof typeof AIMediaItemType];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AIMediaItemObjectType)[keyof typeof AIMediaItemObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
