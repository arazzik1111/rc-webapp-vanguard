import { CommentInsight } from '@models/swagger/App/Domain/Presence/Entities/Locations/Comments/CommentInsight';
import { SocialUser } from '@models/swagger/App/Domain/Presence/Entities/Social/SocialUser';
import { MediaItems } from '@models/swagger/DDD/Domain/Common/Entities/MediaItems/MediaItems';

export const SocialMediaCommentSocialMediaSourceType = {
  FACEBOOK: 'FACEBOOK',
  INSTAGRAM: 'INSTAGRAM',
  LINKEDIN: 'LINKEDIN',
  X: 'X',
};

export const SocialMediaCommentSocialMediaSourceTypeStrict = {
  FACEBOOK: 'FACEBOOK',
  INSTAGRAM: 'INSTAGRAM',
  LINKEDIN: 'LINKEDIN',
  X: 'X',
} as const;

export const SocialMediaCommentObjectType = {
  App_Domain_Presence_Entities_Locations_Comments_SocialMediaComment:
    'App\\Domain\\Presence\\Entities\\Locations\\Comments\\SocialMediaComment',
};

export const SocialMediaCommentObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Comments_SocialMediaComment:
    'App\\Domain\\Presence\\Entities\\Locations\\Comments\\SocialMediaComment',
} as const;

export type SocialMediaComment = {
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
  socialMediaSourceType?: (typeof SocialMediaCommentSocialMediaSourceType)[keyof typeof SocialMediaCommentSocialMediaSourceType];
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
  objectType: (typeof SocialMediaCommentObjectType)[keyof typeof SocialMediaCommentObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
