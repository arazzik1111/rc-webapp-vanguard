import { XAccountProfile } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/X/Locations/Connection/Token/XAccountProfile';

export const XConnectionTokenAccessTokenState = {
  USER_CONNECTED: 'USER_CONNECTED',
  USER_DISCONNECTED: 'USER_DISCONNECTED',
  USER_OPT_OUT: 'USER_OPT_OUT',
  NOT_FOUND: 'NOT_FOUND',
};

export const XConnectionTokenAccessTokenStateStrict = {
  USER_CONNECTED: 'USER_CONNECTED',
  USER_DISCONNECTED: 'USER_DISCONNECTED',
  USER_OPT_OUT: 'USER_OPT_OUT',
  NOT_FOUND: 'NOT_FOUND',
} as const;

export const XConnectionTokenTokenLifetime = {
  long: 'long',
};

export const XConnectionTokenTokenLifetimeStrict = {
  long: 'long',
} as const;

export const XConnectionTokenObjectType = {
  App_Domain_Presence_Entities_ListingServices_X_Locations_Connection_Token_XConnectionToken:
    'App\\Domain\\Presence\\Entities\\ListingServices\\X\\Locations\\Connection\\Token\\XConnectionToken',
};

export const XConnectionTokenObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_X_Locations_Connection_Token_XConnectionToken:
    'App\\Domain\\Presence\\Entities\\ListingServices\\X\\Locations\\Connection\\Token\\XConnectionToken',
} as const;

export type XConnectionToken = {
  /**
   * The state of the connection
   *  Allowed Values:
   * -   `USER_CONNECTED`: The state of the connection - User Connected
   * -   `USER_DISCONNECTED`: The state of the connection - User Disconnected
   * -   `USER_OPT_OUT`: The state of the connection - User Opted Out
   * -   `NOT_FOUND`: The state of the connection - User Not Found
   *
   */
  accessTokenState?: (typeof XConnectionTokenAccessTokenState)[keyof typeof XConnectionTokenAccessTokenState];
  /**
   * The DateTime the token was issued
   */
  issuedAt?: string;
  /**
   * Whether the token is active or not
   */
  isActive?: boolean;
  /**
   * Token has always long lifetime
   *  Allowed Values:
   * -   `long`: The lifetime of the token - Long
   *
   */
  tokenLifetime?: (typeof XConnectionTokenTokenLifetime)[keyof typeof XConnectionTokenTokenLifetime];
  userInfo?: XAccountProfile;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof XConnectionTokenObjectType)[keyof typeof XConnectionTokenObjectType];
};
