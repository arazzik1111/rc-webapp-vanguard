import { GooglePlace } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Places/GooglePlace';

export const GooglePlacesObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Places_GooglePlaces:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Places\\GooglePlaces',
};

export const GooglePlacesObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Places_GooglePlaces:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Places\\GooglePlaces',
} as const;

export type GooglePlaces = {
  /**
   * The string to search for
   */
  searchInput?: string;
  /**
   * The language code to display search results
   */
  languageCode?: string;
  elements?: GooglePlace[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GooglePlacesObjectType)[keyof typeof GooglePlacesObjectType];
};
