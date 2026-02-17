import { LinkedinComment } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Linkedin/Locations/Comments/LinkedinComment';

export const LinkedinCommentsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_Comments_LinkedinComments:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\Comments\\LinkedinComments',
};

export const LinkedinCommentsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_Comments_LinkedinComments:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\Comments\\LinkedinComments',
} as const;

export type LinkedinComments = {
  /**
   * Min created Date to filter for
   */
  minCreatedDate?: string;
  /**
   * Max created Date to filter for
   */
  maxCreatedDate?: string;
  answered?: boolean;
  elements?: LinkedinComment[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LinkedinCommentsObjectType)[keyof typeof LinkedinCommentsObjectType];
};
