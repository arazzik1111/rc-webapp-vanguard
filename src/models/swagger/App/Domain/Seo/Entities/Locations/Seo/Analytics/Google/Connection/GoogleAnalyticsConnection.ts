import { GoogleConnectionToken } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Analytics/Google/Connection/Token/GoogleConnectionToken';

export const GoogleAnalyticsConnectionConnectionState = {
  ACCOUNT_CONNECTED: 'ACCOUNT_CONNECTED',
  NOT_CONNECTED: 'NOT_CONNECTED',
};

export const GoogleAnalyticsConnectionConnectionStateStrict = {
  ACCOUNT_CONNECTED: 'ACCOUNT_CONNECTED',
  NOT_CONNECTED: 'NOT_CONNECTED',
} as const;

export const GoogleAnalyticsConnectionConnectionType = {
  TOKEN: 'TOKEN',
  NONE: 'NONE',
};

export const GoogleAnalyticsConnectionConnectionTypeStrict = {
  TOKEN: 'TOKEN',
  NONE: 'NONE',
} as const;

export const GoogleAnalyticsConnectionObjectType = {
  App_Domain_Seo_Entities_Locations_Seo_Analytics_Google_Connection_GoogleAnalyticsConnection:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Analytics\\Google\\Connection\\GoogleAnalyticsConnection',
};

export const GoogleAnalyticsConnectionObjectTypeStrict = {
  App_Domain_Seo_Entities_Locations_Seo_Analytics_Google_Connection_GoogleAnalyticsConnection:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Analytics\\Google\\Connection\\GoogleAnalyticsConnection',
} as const;

export type GoogleAnalyticsConnection = {
  /**
   * The state of the connection to Google Analytics
   *  Allowed Values:
   * -   `ACCOUNT_CONNECTED`: Analytics is connected (by token)
   * -   `NOT_CONNECTED`: Analytics is not connected
   *
   */
  connectionState?: (typeof GoogleAnalyticsConnectionConnectionState)[keyof typeof GoogleAnalyticsConnectionConnectionState];
  /**
   * The type of the connection to Google Analytics
   *  Allowed Values:
   * -   `TOKEN`: Connection is performed through TOKEN
   * -   `NONE`: Connection is managed by us (Argus), e.g. in case of GMB accounts created in managed account
   *
   */
  connectionType?: (typeof GoogleAnalyticsConnectionConnectionType)[keyof typeof GoogleAnalyticsConnectionConnectionType];
  connectionToken?: GoogleConnectionToken;
  /**
   * This URL initiates token connection OAuth flow, open it in a popup and handle JS post message event with variable `success`, the window will close itself
   */
  googleTokenConnectFlowInitUrl?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleAnalyticsConnectionObjectType)[keyof typeof GoogleAnalyticsConnectionObjectType];
};
