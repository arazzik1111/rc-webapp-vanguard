import { GooglePostCallToAction } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Posts/GooglePostCallToAction';
import { PostErrors } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/PostErrors';
import { PostInsights } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/PostInsights';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const GooglePostSettingStatus = {
  SCHEDULED: 'SCHEDULED',
  PUBLISHED: 'PUBLISHED',
  PUBLISHING: 'PUBLISHING',
  NOT_APPROVED: 'NOT_APPROVED',
  DRAFT: 'DRAFT',
  ERROR: 'ERROR',
};

export const GooglePostSettingStatusStrict = {
  SCHEDULED: 'SCHEDULED',
  PUBLISHED: 'PUBLISHED',
  PUBLISHING: 'PUBLISHING',
  NOT_APPROVED: 'NOT_APPROVED',
  DRAFT: 'DRAFT',
  ERROR: 'ERROR',
} as const;

export const GooglePostSettingType = {
  POST: 'POST',
  EVENT: 'EVENT',
  STORY: 'STORY',
  OFFER: 'OFFER',
};

export const GooglePostSettingTypeStrict = {
  POST: 'POST',
  EVENT: 'EVENT',
  STORY: 'STORY',
  OFFER: 'OFFER',
} as const;

export const GooglePostSettingObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Posts_GooglePostSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Posts\\GooglePostSetting',
};

export const GooglePostSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Posts_GooglePostSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Posts\\GooglePostSetting',
} as const;

export type GooglePostSetting = {
  /**
   * Language code of the post
   */
  languageCode?: string;
  callToAction?: GooglePostCallToAction;
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
  status?: (typeof GooglePostSettingStatus)[keyof typeof GooglePostSettingStatus];
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
  type?: (typeof GooglePostSettingType)[keyof typeof GooglePostSettingType];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GooglePostSettingObjectType)[keyof typeof GooglePostSettingObjectType];
  changeHistory?: ChangeHistory;
};
