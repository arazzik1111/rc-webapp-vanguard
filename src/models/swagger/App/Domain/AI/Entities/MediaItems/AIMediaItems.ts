import { AIMediaItem } from '@models/swagger/App/Domain/AI/Entities/MediaItems/AIMediaItem';

export const AIMediaItemsObjectType = {
  App_Domain_AI_Entities_MediaItems_AIMediaItems: 'App\\Domain\\AI\\Entities\\MediaItems\\AIMediaItems',
};

export const AIMediaItemsObjectTypeStrict = {
  App_Domain_AI_Entities_MediaItems_AIMediaItems: 'App\\Domain\\AI\\Entities\\MediaItems\\AIMediaItems',
} as const;

export type AIMediaItems = {
  /**
   * The description used to retrieve the AI Media Items
   */
  description?: string;
  /**
   * The number of AI Media Items to retrieve
   */
  count?: number;
  /**
   * The Unsplash link with the application referral added
   */
  unsplashApplicationReferralLink?: string;
  elements?: AIMediaItem[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AIMediaItemsObjectType)[keyof typeof AIMediaItemsObjectType];
};
