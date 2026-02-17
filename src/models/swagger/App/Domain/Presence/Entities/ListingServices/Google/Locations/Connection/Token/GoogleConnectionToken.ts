import { GoogleAccountProfile } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Connection/Token/GoogleAccountProfile';
import { GoogleLocationInfo } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Connection/Token/GoogleLocationInfo';

export const GoogleConnectionTokenTokenSetupState = {
  CONNECTED: 'CONNECTED',
  DISCONNECTED: 'DISCONNECTED',
  TOKEN_ONGOING: 'TOKEN_ONGOING',
  USER_CONNECTED: 'USER_CONNECTED',
};

export const GoogleConnectionTokenTokenSetupStateStrict = {
  CONNECTED: 'CONNECTED',
  DISCONNECTED: 'DISCONNECTED',
  TOKEN_ONGOING: 'TOKEN_ONGOING',
  USER_CONNECTED: 'USER_CONNECTED',
} as const;

export const GoogleConnectionTokenObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Connection_Token_GoogleConnectionToken:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Connection\\Token\\GoogleConnectionToken',
};

export const GoogleConnectionTokenObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Connection_Token_GoogleConnectionToken:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Connection\\Token\\GoogleConnectionToken',
} as const;

export type GoogleConnectionToken = {
  /**
   * The setup state of the token access
   *  Allowed Values:
   * -   `CONNECTED`: Connection established but no ongoing token present
   * -   `DISCONNECTED`: Token connection is disconnected
   * -   `TOKEN_ONGOING`: Token is present
   * -   `USER_CONNECTED`: Token is present
   *
   */
  tokenSetupState?: (typeof GoogleConnectionTokenTokenSetupState)[keyof typeof GoogleConnectionTokenTokenSetupState];
  /**
   * The DateTime the token will expire
   */
  expiresAt?: string;
  /**
   * The DateTime the token was issued
   */
  issuedAt?: string;
  /**
   * The scope API scope of the userToken
   */
  apiScope?: string;
  accountProfile?: GoogleAccountProfile;
  locationInfo?: GoogleLocationInfo;
  /**
   * Wheather this token is in active use or not
   */
  isActive?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleConnectionTokenObjectType)[keyof typeof GoogleConnectionTokenObjectType];
};
