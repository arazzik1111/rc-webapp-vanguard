import { LinkedinAccountProfile } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Linkedin/Locations/Connection/Token/LinkedinAccountProfile';
import { LinkedinLocationInfo } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Linkedin/Locations/Connection/Token/LinkedinLocationInfo';

export const LinkedinConnectionTokenAccessTokenState = {
  USER_CONNECTED: 'USER_CONNECTED',
  USER_DISCONNECTED: 'USER_DISCONNECTED',
  USER_OPT_OUT: 'USER_OPT_OUT',
  NOT_FOUND: 'NOT_FOUND',
};

export const LinkedinConnectionTokenAccessTokenStateStrict = {
  USER_CONNECTED: 'USER_CONNECTED',
  USER_DISCONNECTED: 'USER_DISCONNECTED',
  USER_OPT_OUT: 'USER_OPT_OUT',
  NOT_FOUND: 'NOT_FOUND',
} as const;

export const LinkedinConnectionTokenTokenLifetime = {
  short: 'short',
  long: 'long',
};

export const LinkedinConnectionTokenTokenLifetimeStrict = {
  short: 'short',
  long: 'long',
} as const;

export const LinkedinConnectionTokenObjectType = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_Connection_Token_LinkedinConnectionToken:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\Connection\\Token\\LinkedinConnectionToken',
};

export const LinkedinConnectionTokenObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_Connection_Token_LinkedinConnectionToken:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\Connection\\Token\\LinkedinConnectionToken',
} as const;

export type LinkedinConnectionToken = {
  /**
   * The state of the connection
   *  Allowed Values:
   * -   `USER_CONNECTED`: The state of the connection - User Connected
   * -   `USER_DISCONNECTED`: The state of the connection - User Disconnected
   * -   `USER_OPT_OUT`: The state of the connection - User Opted Out
   * -   `NOT_FOUND`: The state of the connection - User Not Found
   *
   */
  accessTokenState?: (typeof LinkedinConnectionTokenAccessTokenState)[keyof typeof LinkedinConnectionTokenAccessTokenState];
  /**
   * The DateTime the token will expire
   */
  expiresAt?: string;
  /**
   * The DateTime the token was issued
   */
  issuedAt?: string;
  locationInfo?: LinkedinLocationInfo;
  /**
   * Whether the token is active or not
   */
  isActive?: boolean;
  /**
   * Whether the token is valid or not
   */
  isValid?: boolean;
  /**
   * Whether Token has a long or short lifetime
   *  Allowed Values:
   * -   `short`: The lifetime of the token - Short
   * -   `long`: The lifetime of the token - Long
   *
   */
  tokenLifetime?: (typeof LinkedinConnectionTokenTokenLifetime)[keyof typeof LinkedinConnectionTokenTokenLifetime];
  /**
   * The DateTime the token will expire
   */
  refreshTokenExpiresAt?: string;
  /**
   * The API scopes available for the generated access token
   */
  apiScopes?: string[];
  userInfo?: LinkedinAccountProfile;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LinkedinConnectionTokenObjectType)[keyof typeof LinkedinConnectionTokenObjectType];
};
