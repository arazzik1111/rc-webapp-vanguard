import { FacebookComments } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/Locations/Comments/FacebookComments';
import { InstagramComments } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Instagram/Locations/Comments/InstagramComments';
import { LinkedinComments } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Linkedin/Locations/Comments/LinkedinComments';
import { XComments } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/X/Locations/Comments/XComments';
import { SocialMediaComment } from '@models/swagger/App/Domain/Presence/Entities/Locations/Comments/SocialMediaComment';

export const SocialMediaCommentsObjectType = {
  App_Domain_Presence_Entities_Locations_Comments_SocialMediaComments:
    'App\\Domain\\Presence\\Entities\\Locations\\Comments\\SocialMediaComments',
};

export const SocialMediaCommentsObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Comments_SocialMediaComments:
    'App\\Domain\\Presence\\Entities\\Locations\\Comments\\SocialMediaComments',
} as const;

export type SocialMediaComments = {
  /**
   * Min created Date to filter for
   */
  minCreatedDate?: string;
  /**
   * Max created Date to filter for
   */
  maxCreatedDate?: string;
  answered?: boolean;
  facebookComments?: FacebookComments;
  instagramComments?: InstagramComments;
  linkedinComments?: LinkedinComments;
  xComments?: XComments;
  elements?: SocialMediaComment[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SocialMediaCommentsObjectType)[keyof typeof SocialMediaCommentsObjectType];
};
