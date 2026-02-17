import { PostalAddress } from '@models/swagger/App/Domain/Common/Entities/Address/PostalAddress';

export const FacebookLocationInfoObjectType = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_Connection_Token_FacebookLocationInfo:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\Connection\\Token\\FacebookLocationInfo',
};

export const FacebookLocationInfoObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_Connection_Token_FacebookLocationInfo:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\Connection\\Token\\FacebookLocationInfo',
} as const;

export type FacebookLocationInfo = {
  /**
   * The id associated with the connected Facebook Location/Page
   */
  locationId?: string;
  /**
   * The name of the connected Facebook Location/Page
   */
  locationName?: string;
  /**
   * Primary phone number not normalized
   */
  primaryPhone?: string;
  /**
   * URL of the website
   */
  websiteUrl?: string;
  /**
   * Primary category name
   */
  primaryCategoryName?: string;
  /**
   * Language of the location / region
   */
  languageCode?: string;
  address?: PostalAddress;
  /**
   * Facebook Page Url
   */
  locationUrl?: string;
  /**
   * Facebook Page profile picture
   */
  locationProfilePictureUrl?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FacebookLocationInfoObjectType)[keyof typeof FacebookLocationInfoObjectType];
};
