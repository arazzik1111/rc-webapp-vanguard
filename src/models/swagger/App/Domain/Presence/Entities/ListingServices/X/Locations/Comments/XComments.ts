import { XComment } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/X/Locations/Comments/XComment';

export const XCommentsObjectType = {
  App_Domain_Presence_Entities_ListingServices_X_Locations_Comments_XComments:
    'App\\Domain\\Presence\\Entities\\ListingServices\\X\\Locations\\Comments\\XComments',
};

export const XCommentsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_X_Locations_Comments_XComments:
    'App\\Domain\\Presence\\Entities\\ListingServices\\X\\Locations\\Comments\\XComments',
} as const;

export type XComments = {
  /**
   * Min created Date to filter for
   */
  minCreatedDate?: string;
  /**
   * Max created Date to filter for
   */
  maxCreatedDate?: string;
  answered?: boolean;
  elements?: XComment[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof XCommentsObjectType)[keyof typeof XCommentsObjectType];
};
