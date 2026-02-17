import { Event } from '@models/swagger/App/Domain/Presence/Entities/Locations/Events/Event';
import { PostMediaItemContent } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/MediaItems/PostMediaItemContent';
import { PostMediaItemSettings } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/MediaItems/PostMediaItemSettings';
import { PostMediaItemThumbnailSettings } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/MediaItems/PostMediaItemThumbnailSettings';
import { PostMediaItemVideoSettings } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/MediaItems/PostMediaItemVideoSettings';
import { Post } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/Post';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const PostMediaItemMimeType = {
  video_mp4: 'video/mp4',
  video_quicktime: 'video/quicktime',
};

export const PostMediaItemMimeTypeStrict = {
  video_mp4: 'video/mp4',
  video_quicktime: 'video/quicktime',
} as const;

export const PostMediaItemType = {
  photo: 'photo',
  video: 'video',
  DOCUMENT: 'DOCUMENT',
};

export const PostMediaItemTypeStrict = {
  photo: 'photo',
  video: 'video',
  DOCUMENT: 'DOCUMENT',
} as const;

export const PostMediaItemObjectType = {
  App_Domain_Presence_Entities_Locations_Posts_MediaItems_PostMediaItem:
    'App\\Domain\\Presence\\Entities\\Locations\\Posts\\MediaItems\\PostMediaItem',
};

export const PostMediaItemObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Posts_MediaItems_PostMediaItem:
    'App\\Domain\\Presence\\Entities\\Locations\\Posts\\MediaItems\\PostMediaItem',
} as const;

export type PostMediaItem = {
  /**
   * The Post ID
   */
  postId?: number;
  /**
   * associated with PostMediaItem
   */
  post?: Post | Event;
  /**
   * Internal unique Identifier of the Photo/Video
   */
  identifier?: string;
  /**
   * PostMediaItem settings
   */
  settings?: PostMediaItemSettings | PostMediaItemThumbnailSettings | PostMediaItemVideoSettings;
  mediaItemContent?: PostMediaItemContent;
  /**
   * If true, PostMediaItem has been already uploaded to Argus
   */
  uploadedToArgus?: boolean;
  /**
   * If true, PostMediaItem is a thumbnail
   */
  isThumbnail?: boolean;
  /**
   * The public url of the thumbnail
   */
  publicThumbnailUrl?: string;
  /**
   * The id of the parent PostMediaItem
   */
  parentPostMediaItemId?: number;
  /**
   *
   *  Allowed Values:
   * -   `video/mp4`: mp4 video type
   * -   `video/quicktime`: mov video type
   *
   */
  mimeType?: (typeof PostMediaItemMimeType)[keyof typeof PostMediaItemMimeType];
  /**
   * Public URL of the mediaitem
   */
  publicUrl?: string;
  /**
   * Description can be displayed on directories
   */
  description?: string;
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
  type?: (typeof PostMediaItemType)[keyof typeof PostMediaItemType];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PostMediaItemObjectType)[keyof typeof PostMediaItemObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
