export const GoogleLocationAdminRole = {
  ADMIN_ROLE_UNSPECIFIED: 'ADMIN_ROLE_UNSPECIFIED',
  PRIMARY_OWNER: 'PRIMARY_OWNER',
  OWNER: 'OWNER',
  MANAGER: 'MANAGER',
  SITE_MANAGER: 'SITE_MANAGER',
};

export const GoogleLocationAdminRoleStrict = {
  ADMIN_ROLE_UNSPECIFIED: 'ADMIN_ROLE_UNSPECIFIED',
  PRIMARY_OWNER: 'PRIMARY_OWNER',
  OWNER: 'OWNER',
  MANAGER: 'MANAGER',
  SITE_MANAGER: 'SITE_MANAGER',
} as const;

export const GoogleLocationAdminObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Admins_GoogleLocationAdmin:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Admins\\GoogleLocationAdmin',
};

export const GoogleLocationAdminObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Admins_GoogleLocationAdmin:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Admins\\GoogleLocationAdmin',
} as const;

export type GoogleLocationAdmin = {
  /**
   * ID of the Admin
   */
  id?: string;
  /**
   * The name of the admin. When making the initial invitation, this is the invitee's email address. On GET calls, the user's email address is returned if the invitation is still pending. Otherwise, it contains the user's first and last names.
   */
  name?: string;
  /**
   * The name of the Account resource that this Admin refers to. Used when calling locations.admins.create to invite a LocationGroup as an admin
   */
  accountId?: string;
  /**
   * Specifies the role that this admin uses with the specified Account or Location
   *  Allowed Values:
   * -   `ADMIN_ROLE_UNSPECIFIED`: Not specified
   * -   `PRIMARY_OWNER`: The admin has owner-level access and is the primary owner. (Displays as 'Primary Owner' in UI).
   * -   `OWNER`: The admin has owner-level access. (Displays as 'Owner' in UI).
   * -   `MANAGER`: The admin has managerial access.
   * -   `SITE_MANAGER`: The admin can manage social (Google+) pages. (Displays as 'Site Manager' in UI). This API doesn't allow creating an account admin with a SITE_MANAGER role.
   *
   */
  role?: (typeof GoogleLocationAdminRole)[keyof typeof GoogleLocationAdminRole];
  /**
   * Indicates whether this admin has a pending invitation for the specified resource.
   */
  hasPendingInvitation?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleLocationAdminObjectType)[keyof typeof GoogleLocationAdminObjectType];
};
