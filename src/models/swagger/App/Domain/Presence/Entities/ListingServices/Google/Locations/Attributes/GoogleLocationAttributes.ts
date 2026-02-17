import { GoogleLocationAttribute } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Attributes/GoogleLocationAttribute';

export const GoogleLocationAttributesObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Attributes_GoogleLocationAttributes:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Attributes\\GoogleLocationAttributes',
};

export const GoogleLocationAttributesObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Attributes_GoogleLocationAttributes:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Attributes\\GoogleLocationAttributes',
} as const;

export type GoogleLocationAttributes = {
  elements?: GoogleLocationAttribute[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleLocationAttributesObjectType)[keyof typeof GoogleLocationAttributesObjectType];
};
