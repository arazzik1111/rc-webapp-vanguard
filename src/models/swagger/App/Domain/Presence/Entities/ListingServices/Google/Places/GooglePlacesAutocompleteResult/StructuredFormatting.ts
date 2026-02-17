export const StructuredFormattingObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Places_GooglePlacesAutocompleteResult_StructuredFormatting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Places\\GooglePlacesAutocompleteResult\\StructuredFormatting',
};

export const StructuredFormattingObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Places_GooglePlacesAutocompleteResult_StructuredFormatting:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Places\\GooglePlacesAutocompleteResult\\StructuredFormatting',
} as const;

export type StructuredFormatting = {
  /**
   * This is the main text part of the unformatted description of the place suggested by the Places service. Usually the name of the place
   */
  mainText?: string;
  /**
   * This is the secondary text part of the unformatted description of the place suggested by the Places service. Usually the location of the place.
   */
  secondaryText?: string;
  /**
   * A set of substrings in the main text that match elements in the user's input, suitable for use in highlighting those substrings. Each substring is identified by an offset and a length, expressed in unicode characters.
   */
  mainTextMatchedSubstrings?: any[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof StructuredFormattingObjectType)[keyof typeof StructuredFormattingObjectType];
};
