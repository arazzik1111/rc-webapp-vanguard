import { FacebookComments } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/Locations/Comments/FacebookComments';
import { CommentInsight } from '@models/swagger/App/Domain/Presence/Entities/Locations/Comments/CommentInsight';
import { SocialApiApplication } from '@models/swagger/App/Domain/Presence/Entities/Social/SocialApiApplication';
import { SocialUser } from '@models/swagger/App/Domain/Presence/Entities/Social/SocialUser';
import { MediaItems } from '@models/swagger/DDD/Domain/Common/Entities/MediaItems/MediaItems';

export const FacebookCommentViewerReaction = {
  NONE: 'NONE',
  ANGRY: 'ANGRY',
  LIKE: 'LIKE',
  WOW: 'WOW',
  HAHA: 'HAHA',
  SAD: 'SAD',
  LOVE: 'LOVE',
  CARE: 'CARE',
};

export const FacebookCommentViewerReactionStrict = {
  NONE: 'NONE',
  ANGRY: 'ANGRY',
  LIKE: 'LIKE',
  WOW: 'WOW',
  HAHA: 'HAHA',
  SAD: 'SAD',
  LOVE: 'LOVE',
  CARE: 'CARE',
} as const;

export const FacebookCommentSocialMediaSourceType = {
  FACEBOOK: 'FACEBOOK',
  INSTAGRAM: 'INSTAGRAM',
  LINKEDIN: 'LINKEDIN',
  X: 'X',
};

export const FacebookCommentSocialMediaSourceTypeStrict = {
  FACEBOOK: 'FACEBOOK',
  INSTAGRAM: 'INSTAGRAM',
  LINKEDIN: 'LINKEDIN',
  X: 'X',
} as const;

export const FacebookCommentObjectType = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_Comments_FacebookComment:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\Comments\\FacebookComment',
};

export const FacebookCommentObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_Comments_FacebookComment:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\Comments\\FacebookComment',
} as const;

export type FacebookComment = {
  /**
   * The comment permalink URL.
   */
  permalinkUrl?: string;
  /**
   * Indicates if the comment can be hidden.
   */
  canHide?: boolean;
  application?: SocialApiApplication;
  nestedComments?: FacebookComments;
  /**
   * Indicates if the page has reacted to the comment. Possible values are 'NONE' (no reaction), 'LIKE', 'LOVE', 'HAHA', 'WOW', 'SAD', 'ANGRY', 'CARE'
   *  Allowed Values:
   * -   `NONE`: Comments Status NONE
   * -   `ANGRY`: The Reaction type Angry
   * -   `LIKE`: The Reaction type Like
   * -   `WOW`: The Reaction type Wow
   * -   `HAHA`: The Reaction type Haha
   * -   `SAD`: The Reaction type Sad
   * -   `LOVE`: The Reaction type Love
   * -   `CARE`: The Reaction type Care
   *
   */
  viewerReaction?: (typeof FacebookCommentViewerReaction)[keyof typeof FacebookCommentViewerReaction];
  /**
   * The id of the parent entity  (the id of Post or Event entity)
   */
  socialMediaEntityParentId?: number;
  /**
   * The external id of the parent external social media entity (can be Post, Album, Comment, Event, Photo, User, Video, Thread, Link etc.
   */
  socialMediaEntityParentExternalId?: string;
  /**
   * The external id of this item - from social media platform
   */
  externalId?: string;
  /**
   *
   *  Allowed Values:
   * -   `FACEBOOK`
   * -   `INSTAGRAM`
   * -   `LINKEDIN`
   * -   `X`
   *
   */
  socialMediaSourceType?: (typeof FacebookCommentSocialMediaSourceType)[keyof typeof FacebookCommentSocialMediaSourceType];
  /**
   * The external id of the parent Comment, if this comment was created on another comment (as a reply)
   */
  parentCommentId?: string;
  /**
   * The comment's content
   */
  message?: string;
  from?: SocialUser;
  /**
   * The DateTime indicating when the comment was created
   */
  createdTime?: string;
  attachments?: MediaItems;
  /**
   * Whether this comment is hidden or visible.
   */
  isHidden?: boolean;
  /**
   * Whether this comment is hidden or visible.
   */
  isPrivate?: boolean;
  /**
   * Link, video, sticker, or photo attached to the comment
   */
  attachmentUrl?: string;
  /**
   * Whether this comment is a reply to another comment
   */
  isReply?: boolean;
  /**
   * Whether this comment is answered or not
   */
  answered?: boolean;
  insight?: CommentInsight;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FacebookCommentObjectType)[keyof typeof FacebookCommentObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
