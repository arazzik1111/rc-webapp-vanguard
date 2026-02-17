export const GoogleLocationOpenInfoStatus = {
  OPEN_FOR_BUSINESS_UNSPECIFIED: 'OPEN_FOR_BUSINESS_UNSPECIFIED',
  OPEN: 'OPEN',
  CLOSED_TEMPORARILY: 'CLOSED_TEMPORARILY',
  CLOSED_PERMANENTLY: 'CLOSED_PERMANENTLY',
};

export const GoogleLocationOpenInfoStatusStrict = {
  OPEN_FOR_BUSINESS_UNSPECIFIED: 'OPEN_FOR_BUSINESS_UNSPECIFIED',
  OPEN: 'OPEN',
  CLOSED_TEMPORARILY: 'CLOSED_TEMPORARILY',
  CLOSED_PERMANENTLY: 'CLOSED_PERMANENTLY',
} as const;

export const GoogleLocationOpenInfoObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_OpenInfo_GoogleLocationOpenInfo:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\OpenInfo\\GoogleLocationOpenInfo',
};

export const GoogleLocationOpenInfoObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_OpenInfo_GoogleLocationOpenInfo:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\OpenInfo\\GoogleLocationOpenInfo',
} as const;

export type GoogleLocationOpenInfo = {
  /**
   * Indicates whether this business is eligible for re-open
   */
  canReopen?: boolean;
  /**
   * The date on which the location first opened. If the exact day is not known, month and year only can be provided. The date must be in the past or be no more than one year in the future
   */
  openDate?: string;
  /**
   * ndicates whether or not the Location is currently open for business. All locations are open by default, unless updated to be closed
   *  Allowed Values:
   * -   `OPEN_FOR_BUSINESS_UNSPECIFIED`: Not specified
   * -   `OPEN`: Indicates that the location is open
   * -   `CLOSED_TEMPORARILY`: Indicates that the location has been temporarily closed
   * -   `CLOSED_PERMANENTLY`: Indicates that the location has been permanently closed
   *
   */
  status?: (typeof GoogleLocationOpenInfoStatus)[keyof typeof GoogleLocationOpenInfoStatus];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleLocationOpenInfoObjectType)[keyof typeof GoogleLocationOpenInfoObjectType];
};
