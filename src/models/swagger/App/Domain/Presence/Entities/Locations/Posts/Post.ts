import { BoostAdCreatives } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/BoostAdCreatives';
import { ShortUrls } from '@models/swagger/App/Domain/Common/Entities/ShortUrls/ShortUrls';
import { FacebookPost } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/Locations/Posts/FacebookPost';
import { InstagramPost } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Instagram/Locations/Posts/InstagramPost';
import { LinkedinPost } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Linkedin/Locations/Posts/LinkedinPost';
import { XPost } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/X/Locations/Posts/XPost';
import { SocialMediaComments } from '@models/swagger/App/Domain/Presence/Entities/Locations/Comments/SocialMediaComments';
import { Location } from '@models/swagger/App/Domain/Presence/Entities/Locations/Location';
import { PostMediaItems } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/MediaItems/PostMediaItems';
import { PostSettings } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/PostSettings';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const PostType = {
  POST: 'POST',
  EVENT: 'EVENT',
  OFFER: 'OFFER',
};

export const PostTypeStrict = {
  POST: 'POST',
  EVENT: 'EVENT',
  OFFER: 'OFFER',
} as const;

export const PostStatus = {
  SCHEDULED: 'SCHEDULED',
  PUBLISHED: 'PUBLISHED',
  PUBLISHING: 'PUBLISHING',
  NO_DIRECTORIES_SELECTED_FOR_PUBLISHING: 'NO_DIRECTORIES_SELECTED_FOR_PUBLISHING',
  NOT_APPROVED: 'NOT_APPROVED',
  DRAFT: 'DRAFT',
  ERROR: 'ERROR',
};

export const PostStatusStrict = {
  SCHEDULED: 'SCHEDULED',
  PUBLISHED: 'PUBLISHED',
  PUBLISHING: 'PUBLISHING',
  NO_DIRECTORIES_SELECTED_FOR_PUBLISHING: 'NO_DIRECTORIES_SELECTED_FOR_PUBLISHING',
  NOT_APPROVED: 'NOT_APPROVED',
  DRAFT: 'DRAFT',
  ERROR: 'ERROR',
} as const;

export const PostObjectType = {
  App_Domain_Presence_Entities_Locations_Posts_Post: 'App\\Domain\\Presence\\Entities\\Locations\\Posts\\Post',
};

export const PostObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Posts_Post: 'App\\Domain\\Presence\\Entities\\Locations\\Posts\\Post',
} as const;

export type Post = {
  /**
   * Determines the type of the Post, decides also the type of Class
   *  Allowed Values:
   * -   `POST`: Post contains basic information, like summary and images.
   * -   `EVENT`: Post contains basic information and an event.
   * -   `OFFER`: Post contains basic information, an event and offer related content (e.g. coupon code)
   *
   */
  type?: (typeof PostType)[keyof typeof PostType];
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
  status?: (typeof PostStatus)[keyof typeof PostStatus];
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
  location?: Location;
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
  mediaItems?: PostMediaItems;
  facebookPost?: FacebookPost;
  instagramPost?: InstagramPost;
  linkedinPost?: LinkedinPost;
  xPost?: XPost;
  boostAdCreatives?: BoostAdCreatives;
  shortUrls?: ShortUrls;
  comments?: SocialMediaComments;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PostObjectType)[keyof typeof PostObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
