import { GoogleLocationAdmin } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Admins/GoogleLocationAdmin';

export const GoogleLocationAdminsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Admins_GoogleLocationAdmins:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Admins\\GoogleLocationAdmins',
};

export const GoogleLocationAdminsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Admins_GoogleLocationAdmins:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Admins\\GoogleLocationAdmins',
} as const;

export type GoogleLocationAdmins = {
  /**
   * If true, the customer has been added as Admin and accepted the invitation
   */
  hasCustomerAsAdmin?: boolean;
  /**
   * If true, this account has us as admin
   */
  hasManagedAdmin?: boolean;
  /**
   * If true, the customer has been invited as admin
   */
  customerHasBeenInvitedAsAdmin?: boolean;
  elements?: GoogleLocationAdmin[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleLocationAdminsObjectType)[keyof typeof GoogleLocationAdminsObjectType];
};
