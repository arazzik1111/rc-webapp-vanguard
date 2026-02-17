export const PublishingListingErrorType = {
  VALIDATION: 'VALIDATION',
  EXCEPTION: 'EXCEPTION',
  UNDEFINED: 'UNDEFINED',
};

export const PublishingListingErrorTypeStrict = {
  VALIDATION: 'VALIDATION',
  EXCEPTION: 'EXCEPTION',
  UNDEFINED: 'UNDEFINED',
} as const;

export const PublishingListingErrorObjectType = {
  App_Domain_Presence_Entities_Locations_ListingServices_Connection_PublishingListingError:
    'App\\Domain\\Presence\\Entities\\Locations\\ListingServices\\Connection\\PublishingListingError',
};

export const PublishingListingErrorObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_ListingServices_Connection_PublishingListingError:
    'App\\Domain\\Presence\\Entities\\Locations\\ListingServices\\Connection\\PublishingListingError',
} as const;

export type PublishingListingError = {
  /**
   * The error message
   */
  errorMessage?: string;
  /**
   * The error type
   *  Allowed Values:
   * -   `VALIDATION`: The type of the error - Validation
   * -   `EXCEPTION`: The type of the error - Exception
   * -   `UNDEFINED`: The type of the error - Undefined
   *
   */
  type?: (typeof PublishingListingErrorType)[keyof typeof PublishingListingErrorType];
  /**
   * Complete path to the type of the property
   */
  className?: string;
  /**
   * The name of the property where failed
   */
  propertyName?: string;
  /**
   * The value that was given and which failed
   */
  receivedValue?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PublishingListingErrorObjectType)[keyof typeof PublishingListingErrorObjectType];
};
