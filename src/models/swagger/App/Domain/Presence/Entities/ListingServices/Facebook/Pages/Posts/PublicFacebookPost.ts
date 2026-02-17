import { BoostAdCreatives } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/BoostAdCreatives';
import { ShortUrls } from '@models/swagger/App/Domain/Common/Entities/ShortUrls/ShortUrls';
import { FacebookComments } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/Locations/Comments/FacebookComments';
import { SocialMediaComments } from '@models/swagger/App/Domain/Presence/Entities/Locations/Comments/SocialMediaComments';
import { PostSettings } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/PostSettings';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const PublicFacebookPostType = {
  POST: 'POST',
  EVENT: 'EVENT',
  OFFER: 'OFFER',
};

export const PublicFacebookPostTypeStrict = {
  POST: 'POST',
  EVENT: 'EVENT',
  OFFER: 'OFFER',
} as const;

export const PublicFacebookPostStatus = {
  SCHEDULED: 'SCHEDULED',
  PUBLISHED: 'PUBLISHED',
  PUBLISHING: 'PUBLISHING',
  NO_DIRECTORIES_SELECTED_FOR_PUBLISHING: 'NO_DIRECTORIES_SELECTED_FOR_PUBLISHING',
  NOT_APPROVED: 'NOT_APPROVED',
  DRAFT: 'DRAFT',
  ERROR: 'ERROR',
};

export const PublicFacebookPostStatusStrict = {
  SCHEDULED: 'SCHEDULED',
  PUBLISHED: 'PUBLISHED',
  PUBLISHING: 'PUBLISHING',
  NO_DIRECTORIES_SELECTED_FOR_PUBLISHING: 'NO_DIRECTORIES_SELECTED_FOR_PUBLISHING',
  NOT_APPROVED: 'NOT_APPROVED',
  DRAFT: 'DRAFT',
  ERROR: 'ERROR',
} as const;

export const PublicFacebookPostObjectType = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Pages_Posts_PublicFacebookPost:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Pages\\Posts\\PublicFacebookPost',
};

export const PublicFacebookPostObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Pages_Posts_PublicFacebookPost:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Pages\\Posts\\PublicFacebookPost',
} as const;

export type PublicFacebookPost = {
  /**
   * $pageId
   */
  pageId?: string;
  /**
   * $externalId
   */
  externalId?: string;
  /**
   * $url
   */
  url?: string;
  facebookComments?: FacebookComments;
  /**
   * Determines the type of the Post, decides also the type of Class
   *  Allowed Values:
   * -   `POST`: Post contains basic information, like summary and images.
   * -   `EVENT`: Post contains basic information and an event.
   * -   `OFFER`: Post contains basic information, an event and offer related content (e.g. coupon code)
   *
   */
  type?: (typeof PublicFacebookPostType)[keyof typeof PublicFacebookPostType];
  /**
   * Status of the post
   *  Allowed Values:
   * -   `SCHEDULED`: Scheduled status - used for Posts that will be published in future
   * -   `PUBLISHED`: Published status represents an engagement entity that has been already published
   * -   `PUBLISHING`: Publishing status represents the state during which an engagement entity is in publishing process
   * -   `NO_DIRECTORIES_SELECTED_FOR_PUBLISHING`: Post has no directories selected for publishing and therefor cannot be published
   * -   `NOT_APPROVED`: A not approved entity, due to external requirements
   * -   `DRAFT`: Draft is used for internal state. A draft status means that the entity is still in setup
   * -   `ERROR`: Error due to internal problems
   *
   */
  status?: (typeof PublicFacebookPostStatus)[keyof typeof PublicFacebookPostStatus];
  /**
   * If true, the Post has been created on ListingService and not in the Application
   */
  createdExternally?: boolean;
  /**
   * Content of the Post
   */
  content?: string;
  /**
   * The Location Id associated to the Post
   */
  locationId?: number;
  /**
   * If set, the post will be published only at the specified time
   */
  scheduleAt?: string;
  /**
   * When the post has been published
   */
  virtualPublishedAt?: string;
  /**
   * When the post has been published based on publishing date from social media directories
   */
  publishedAt?: string;
  settings?: PostSettings;
  /**
   * If true, the post sets to publish(ed) on the Facebook
   */
  publishOnFacebook?: boolean;
  /**
   * If true, the post sets to publish(ed) on the Instagram
   */
  publishOnInstagram?: boolean;
  /**
   * If true, the post sets to publish(ed) on the Google
   */
  publishOnGoogle?: boolean;
  /**
   * If true, the post sets to publish(ed) on the LinkedIn
   */
  publishOnLinkedin?: boolean;
  /**
   * If true, the post sets to publish(ed) on the Twitter
   */
  publishOnX?: boolean;
  boostAdCreatives?: BoostAdCreatives;
  shortUrls?: ShortUrls;
  comments?: SocialMediaComments;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PublicFacebookPostObjectType)[keyof typeof PublicFacebookPostObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
