import { GooglePlacesAutocompleteResult } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Places/GooglePlacesAutocompleteResult';

export const GooglePlacesAutocompleteResultsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Places_GooglePlacesAutocompleteResults:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Places\\GooglePlacesAutocompleteResults',
};

export const GooglePlacesAutocompleteResultsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Places_GooglePlacesAutocompleteResults:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Places\\GooglePlacesAutocompleteResults',
} as const;

export type GooglePlacesAutocompleteResults = {
  /**
   * The string to search for
   */
  searchInput?: string;
  /**
   * The language code to display search results
   */
  languageCode?: string;
  /**
   * The country short code to search restricting search results
   */
  countryShortCode?: string;
  /**
   * The places types to search for
   */
  types?: any[];
  elements?: GooglePlacesAutocompleteResult[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GooglePlacesAutocompleteResultsObjectType)[keyof typeof GooglePlacesAutocompleteResultsObjectType];
};
