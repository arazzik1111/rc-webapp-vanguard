import { FacebookComment } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/Locations/Comments/FacebookComment';

export const FacebookCommentsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_Comments_FacebookComments:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\Comments\\FacebookComments',
};

export const FacebookCommentsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_Comments_FacebookComments:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\Comments\\FacebookComments',
} as const;

export type FacebookComments = {
  /**
   * Min created Date to filter for
   */
  minCreatedDate?: string;
  /**
   * Max created Date to filter for
   */
  maxCreatedDate?: string;
  answered?: boolean;
  elements?: FacebookComment[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FacebookCommentsObjectType)[keyof typeof FacebookCommentsObjectType];
};
