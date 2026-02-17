import { PostErrors } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/PostErrors';
import { PostInsights } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/PostInsights';

export const FacebookPostSettingStatus = {
  SCHEDULED: 'SCHEDULED',
  PUBLISHED: 'PUBLISHED',
  PUBLISHING: 'PUBLISHING',
  NOT_APPROVED: 'NOT_APPROVED',
  DRAFT: 'DRAFT',
  ERROR: 'ERROR',
};

export const FacebookPostSettingStatusStrict = {
  SCHEDULED: 'SCHEDULED',
  PUBLISHED: 'PUBLISHED',
  PUBLISHING: 'PUBLISHING',
  NOT_APPROVED: 'NOT_APPROVED',
  DRAFT: 'DRAFT',
  ERROR: 'ERROR',
} as const;

export const FacebookPostSettingType = {
  POST: 'POST',
  EVENT: 'EVENT',
  STORY: 'STORY',
  OFFER: 'OFFER',
};

export const FacebookPostSettingTypeStrict = {
  POST: 'POST',
  EVENT: 'EVENT',
  STORY: 'STORY',
  OFFER: 'OFFER',
} as const;

export const FacebookPostSettingObjectType = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_Posts_FacebookPostSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\Posts\\FacebookPostSetting',
};

export const FacebookPostSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_Posts_FacebookPostSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\Posts\\FacebookPostSetting',
} as const;

export type FacebookPostSetting = {
  /**
   * Creation time
   */
  createdTime?: string;
  /**
   * Update time
   */
  updatedTime?: string;
  /**
   * the date that it is published
   */
  publishedAt?: string;
  /**
   * Id of the post as from the listing service
   */
  externalId?: string;
  /**
   * If true, the post will be published on the current Listing Service
   */
  publishOnListingService?: boolean;
  /**
   * Individual status on ListingService, e.g. on one ListingService it could be published, on another not approved
   *  Allowed Values:
   * -   `SCHEDULED`
   * -   `PUBLISHED`
   * -   `PUBLISHING`
   * -   `NOT_APPROVED`
   * -   `DRAFT`
   * -   `ERROR`
   *
   */
  status?: (typeof FacebookPostSettingStatus)[keyof typeof FacebookPostSettingStatus];
  /**
   * Individual content of the post on ListingService, if set, this is used on sync, otherwise content from Post is used. The content can differ as e.g. Instragram does not allow links.
   */
  content?: string;
  /**
   * Search URL
   */
  permalinkUrl?: string;
  /**
   * Message containing additional error info for a Post
   */
  errorMessage?: string;
  /**
   * Weather the Post requires update on ListingService or not
   */
  requireListingUpdate?: boolean;
  error?: PostErrors;
  insights?: PostInsights;
  /**
   * The type of the Post on the Social Media Platform, e.g. POST, STORY
   *  Allowed Values:
   * -   `POST`
   * -   `EVENT`
   * -   `STORY`
   * -   `OFFER`
   *
   */
  type?: (typeof FacebookPostSettingType)[keyof typeof FacebookPostSettingType];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FacebookPostSettingObjectType)[keyof typeof FacebookPostSettingObjectType];
};
