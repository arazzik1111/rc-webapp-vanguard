import { Listing } from '@models/swagger/App/Domain/Presence/Entities/Locations/Listings/Listing';
import { ListingsSummary } from '@models/swagger/App/Domain/Presence/Entities/Locations/Listings/ListingsSummary';

export const ListingsObjectType = {
  App_Domain_Presence_Entities_Locations_Listings_Listings:
    'App\\Domain\\Presence\\Entities\\Locations\\Listings\\Listings',
};

export const ListingsObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Listings_Listings:
    'App\\Domain\\Presence\\Entities\\Locations\\Listings\\Listings',
} as const;

export type Listings = {
  listingsSummary?: ListingsSummary;
  elements?: Listing[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ListingsObjectType)[keyof typeof ListingsObjectType];
};
