import { GoogleIds } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Common/GoogleIds';

export const GoogleLocationInfoObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Connection_Token_GoogleLocationInfo:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Connection\\Token\\GoogleLocationInfo',
};

export const GoogleLocationInfoObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Connection_Token_GoogleLocationInfo:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Connection\\Token\\GoogleLocationInfo',
} as const;

export type GoogleLocationInfo = {
  googleIds?: GoogleIds;
  /**
   * The locale of the GBP in 2-letter language code
   */
  locale?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleLocationInfoObjectType)[keyof typeof GoogleLocationInfoObjectType];
};
