import { GoogleIds } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Common/GoogleIds';
import { GooglePlace } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Places/GooglePlace';

export const GoogleConnectionProfileObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Connection_GoogleConnectionProfile:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Connection\\GoogleConnectionProfile',
};

export const GoogleConnectionProfileObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Connection_GoogleConnectionProfile:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Connection\\GoogleConnectionProfile',
} as const;

export type GoogleConnectionProfile = {
  googleIds?: GoogleIds;
  /**
   * A link to the location on Google Maps
   */
  googleMapsUrl?: string;
  /**
   * Direct URL that opens new review window
   */
  newReviewUrl?: string;
  /**
   * Domain/Website URL synced on Google Business Profile
   */
  websiteUrl?: string;
  potentialGooglePlacesProfile?: GooglePlace;
  placesSearchForPotentialProfileTriedOnce?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleConnectionProfileObjectType)[keyof typeof GoogleConnectionProfileObjectType];
};
