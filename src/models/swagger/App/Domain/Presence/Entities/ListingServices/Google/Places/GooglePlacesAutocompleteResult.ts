import { GoogleIds } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Common/GoogleIds';
import { StructuredFormatting } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Places/GooglePlacesAutocompleteResult/StructuredFormatting';

export const GooglePlacesAutocompleteResultObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Places_GooglePlacesAutocompleteResult:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Places\\GooglePlacesAutocompleteResult',
};

export const GooglePlacesAutocompleteResultObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Places_GooglePlacesAutocompleteResult:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Places\\GooglePlacesAutocompleteResult',
} as const;

export type GooglePlacesAutocompleteResult = {
  /**
   * Contains the human-readable name for the returned result. For establishment results, this is usually the business name. This content is meant to be read as-is. Do not programmatically parse the formatted address
   */
  description?: string;
  /**
   * A list of substrings that describe the location of the entered term in the prediction result text, so that the term can be highlighted if desired.
   */
  matchedSubstrings?: any[];
  googleIds?: GoogleIds;
  /**
   * Contains an array of terms identifying each section of the returned description (a section of the description is generally terminated with a comma). Each entry in the array has a value field, containing the text of the term, and an offset field, defining the start position of this term in the description, measured in Unicode characters
   */
  terms?: any[];
  /**
   * Contains an array of types that apply to this place. For example: [ "political", "locality" ] or [ "establishment", "geocode", "beauty_salon" ]. The array can contain multiple values
   */
  types?: any[];
  structuredFormatting?: StructuredFormatting;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GooglePlacesAutocompleteResultObjectType)[keyof typeof GooglePlacesAutocompleteResultObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
