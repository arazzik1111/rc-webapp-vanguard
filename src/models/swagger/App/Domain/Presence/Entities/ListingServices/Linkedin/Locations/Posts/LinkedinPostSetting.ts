import { LinkedinPostDistribution } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Linkedin/Locations/Posts/LinkedinPostDistribution';
import { PostErrors } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/PostErrors';
import { PostInsights } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/PostInsights';

export const LinkedinPostSettingVisibility = {
  PUBLIC: 'PUBLIC',
  CONNECTIONS: 'CONNECTIONS',
  LOGGED_IN: 'LOGGED_IN',
  CONTAINER: 'CONTAINER',
};

export const LinkedinPostSettingVisibilityStrict = {
  PUBLIC: 'PUBLIC',
  CONNECTIONS: 'CONNECTIONS',
  LOGGED_IN: 'LOGGED_IN',
  CONTAINER: 'CONTAINER',
} as const;

export const LinkedinPostSettingStatus = {
  SCHEDULED: 'SCHEDULED',
  PUBLISHED: 'PUBLISHED',
  PUBLISHING: 'PUBLISHING',
  NOT_APPROVED: 'NOT_APPROVED',
  DRAFT: 'DRAFT',
  ERROR: 'ERROR',
};

export const LinkedinPostSettingStatusStrict = {
  SCHEDULED: 'SCHEDULED',
  PUBLISHED: 'PUBLISHED',
  PUBLISHING: 'PUBLISHING',
  NOT_APPROVED: 'NOT_APPROVED',
  DRAFT: 'DRAFT',
  ERROR: 'ERROR',
} as const;

export const LinkedinPostSettingType = {
  POST: 'POST',
  EVENT: 'EVENT',
  STORY: 'STORY',
  OFFER: 'OFFER',
};

export const LinkedinPostSettingTypeStrict = {
  POST: 'POST',
  EVENT: 'EVENT',
  STORY: 'STORY',
  OFFER: 'OFFER',
} as const;

export const LinkedinPostSettingObjectType = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_Posts_LinkedinPostSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\Posts\\LinkedinPostSetting',
};

export const LinkedinPostSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_Posts_LinkedinPostSetting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\Posts\\LinkedinPostSetting',
} as const;

export type LinkedinPostSetting = {
  /**
   * The URN of the author of the LinkedIn post (Author: Person or Organization
   */
  author?: string;
  /**
   * Indicates whether re-sharing of the post has been disabled by the author
   */
  isReshareDisabledByAuthor?: boolean;
  /**
   * The visibility of the LinkedIn post (Public or Private)
   *  Allowed Values:
   * -   `PUBLIC`: The visibility of the LinkedIn post - Anyone can view this.
   * -   `CONNECTIONS`: Represents 1st degree network of owner
   * -   `LOGGED_IN`: Viewable by logged in members only.
   * -   `CONTAINER`: Visibility is delegated to the owner of the container entity.
   *
   */
  visibility?: (typeof LinkedinPostSettingVisibility)[keyof typeof LinkedinPostSettingVisibility];
  distribution?: LinkedinPostDistribution;
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
  status?: (typeof LinkedinPostSettingStatus)[keyof typeof LinkedinPostSettingStatus];
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
  type?: (typeof LinkedinPostSettingType)[keyof typeof LinkedinPostSettingType];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LinkedinPostSettingObjectType)[keyof typeof LinkedinPostSettingObjectType];
};
