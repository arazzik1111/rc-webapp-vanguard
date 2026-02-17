import { InstagramComment } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Instagram/Locations/Comments/InstagramComment';

export const InstagramCommentsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Instagram_Locations_Comments_InstagramComments:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Instagram\\Locations\\Comments\\InstagramComments',
};

export const InstagramCommentsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Instagram_Locations_Comments_InstagramComments:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Instagram\\Locations\\Comments\\InstagramComments',
} as const;

export type InstagramComments = {
  /**
   * Min created Date to filter for
   */
  minCreatedDate?: string;
  /**
   * Max created Date to filter for
   */
  maxCreatedDate?: string;
  answered?: boolean;
  elements?: InstagramComment[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof InstagramCommentsObjectType)[keyof typeof InstagramCommentsObjectType];
};
