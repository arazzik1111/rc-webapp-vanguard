import { PostErrors } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/PostErrors';
import { PostInsights } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/PostInsights';

export const XPostSettingStatus = {
  SCHEDULED: 'SCHEDULED',
  PUBLISHED: 'PUBLISHED',
  PUBLISHING: 'PUBLISHING',
  NOT_APPROVED: 'NOT_APPROVED',
  DRAFT: 'DRAFT',
  ERROR: 'ERROR',
};

export const XPostSettingStatusStrict = {
  SCHEDULED: 'SCHEDULED',
  PUBLISHED: 'PUBLISHED',
  PUBLISHING: 'PUBLISHING',
  NOT_APPROVED: 'NOT_APPROVED',
  DRAFT: 'DRAFT',
  ERROR: 'ERROR',
} as const;

export const XPostSettingType = {
  POST: 'POST',
  EVENT: 'EVENT',
  STORY: 'STORY',
  OFFER: 'OFFER',
};

export const XPostSettingTypeStrict = {
  POST: 'POST',
  EVENT: 'EVENT',
  STORY: 'STORY',
  OFFER: 'OFFER',
} as const;

export const XPostSettingObjectType = {
  App_Domain_Presence_Entities_ListingServices_X_Locations_Posts_XPostSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\X\\Locations\\Posts\\XPostSetting',
};

export const XPostSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_X_Locations_Posts_XPostSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\X\\Locations\\Posts\\XPostSetting',
} as const;

export type XPostSetting = {
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
  status?: (typeof XPostSettingStatus)[keyof typeof XPostSettingStatus];
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
  type?: (typeof XPostSettingType)[keyof typeof XPostSettingType];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof XPostSettingObjectType)[keyof typeof XPostSettingObjectType];
};
