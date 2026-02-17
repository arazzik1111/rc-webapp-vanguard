import { PublishingListingError } from '@models/swagger/App/Domain/Presence/Entities/Locations/ListingServices/Connection/PublishingListingError';

export const PublishingListingErrorsObjectType = {
  App_Domain_Presence_Entities_Locations_ListingServices_Connection_PublishingListingErrors:
    'App\\Domain\\Presence\\Entities\\Locations\\ListingServices\\Connection\\PublishingListingErrors',
};

export const PublishingListingErrorsObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_ListingServices_Connection_PublishingListingErrors:
    'App\\Domain\\Presence\\Entities\\Locations\\ListingServices\\Connection\\PublishingListingErrors',
} as const;

export type PublishingListingErrors = {
  elements?: PublishingListingError[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PublishingListingErrorsObjectType)[keyof typeof PublishingListingErrorsObjectType];
};
