import { FacebookPostSetting } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/Locations/Posts/FacebookPostSetting';
import { GooglePostSetting } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Posts/GooglePostSetting';
import { InstagramPostSetting } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Instagram/Locations/Posts/InstagramPostSetting';
import { LinkedinPostSetting } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Linkedin/Locations/Posts/LinkedinPostSetting';
import { XPostSetting } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/X/Locations/Posts/XPostSetting';

export const PostSettingsObjectType = {
  App_Domain_Presence_Entities_Locations_Posts_PostSettings:
    'App\\Domain\\Presence\\Entities\\Locations\\Posts\\PostSettings',
};

export const PostSettingsObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Posts_PostSettings:
    'App\\Domain\\Presence\\Entities\\Locations\\Posts\\PostSettings',
} as const;

export type PostSettings = {
  google?: GooglePostSetting;
  facebook?: FacebookPostSetting;
  instagram?: InstagramPostSetting;
  linkedin?: LinkedinPostSetting;
  x?: XPostSetting;
  /**
   * The type of the Post on the Social Media Platform, e.g. POST, STORY
   */
  type?: string;
  /**
   * Stores the number of times the scheduled post has been retried before it is set to status error
   */
  scheduleRetryCounter?: number;
  /**
   * If true, the post will be deleted
   */
  markedForDeletion?: boolean;
  /**
   * The import ID of the Post
   */
  importPostId?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PostSettingsObjectType)[keyof typeof PostSettingsObjectType];
};
