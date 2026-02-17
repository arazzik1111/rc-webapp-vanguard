import { FacebookAccountProfile } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/Locations/Connection/Token/FacebookAccountProfile';
import { FacebookLocationInfo } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/Locations/Connection/Token/FacebookLocationInfo';

export const FacebookConnectionTokenAccessTokenState = {
  USER_CONNECTED: 'USER_CONNECTED',
  USER_DISCONNECTED: 'USER_DISCONNECTED',
  USER_OPT_OUT: 'USER_OPT_OUT',
  FOUND_BY_US: 'FOUND_BY_US',
  NOT_FOUND: 'NOT_FOUND',
};

export const FacebookConnectionTokenAccessTokenStateStrict = {
  USER_CONNECTED: 'USER_CONNECTED',
  USER_DISCONNECTED: 'USER_DISCONNECTED',
  USER_OPT_OUT: 'USER_OPT_OUT',
  FOUND_BY_US: 'FOUND_BY_US',
  NOT_FOUND: 'NOT_FOUND',
} as const;

export const FacebookConnectionTokenTokenLifetime = {
  short: 'short',
  long: 'long',
};

export const FacebookConnectionTokenTokenLifetimeStrict = {
  short: 'short',
  long: 'long',
} as const;

export const FacebookConnectionTokenObjectType = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_Connection_Token_FacebookConnectionToken:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\Connection\\Token\\FacebookConnectionToken',
};

export const FacebookConnectionTokenObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_Connection_Token_FacebookConnectionToken:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\Connection\\Token\\FacebookConnectionToken',
} as const;

export type FacebookConnectionToken = {
  /**
   * The state of the connection
   *  Allowed Values:
   * -   `USER_CONNECTED`: The state of the connection - User Connected
   * -   `USER_DISCONNECTED`: The state of the connection - User Disconnected
   * -   `USER_OPT_OUT`: The state of the connection - User Opted Out
   * -   `FOUND_BY_US`: The state of the connection - User Found By Us
   * -   `NOT_FOUND`: The state of the connection - User Not Found
   *
   */
  accessTokenState?: (typeof FacebookConnectionTokenAccessTokenState)[keyof typeof FacebookConnectionTokenAccessTokenState];
  /**
   * The DateTime the token will expire
   */
  expiresAt?: string;
  /**
   * The DateTime the token was issued
   */
  issuedAt?: string;
  /**
   * Whether the token is active or not
   */
  isActive?: boolean;
  /**
   * Whether the token is valid or not
   */
  isValid?: boolean;
  /**
   * Whether the token has all instagram permissions or not
   */
  isConnectedWithInstagram?: boolean;
  /**
   *
   *  Allowed Values:
   * -   `short`: The lifetime of the token - Short
   * -   `long`: The lifetime of the token - Long
   *
   */
  tokenLifetime?: (typeof FacebookConnectionTokenTokenLifetime)[keyof typeof FacebookConnectionTokenTokenLifetime];
  /**
   * The API scopes of the userAccessToken
   */
  apiScopes?: string[];
  userInfo?: FacebookAccountProfile;
  locationInfo?: FacebookLocationInfo;
  /**
   * Whether the token has Base permissions or not
   */
  hasBaseScopes?: boolean;
  /**
   * Whether the token has Instagram permissions or not
   */
  hasInstagramScopes?: boolean;
  /**
   * Whether the token has Ads permissions or not
   */
  hasBoostsScopes?: boolean;
  /**
   * Whether the token has Business Manager permissions or not
   */
  hasBusinessManagrScopes?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FacebookConnectionTokenObjectType)[keyof typeof FacebookConnectionTokenObjectType];
};
