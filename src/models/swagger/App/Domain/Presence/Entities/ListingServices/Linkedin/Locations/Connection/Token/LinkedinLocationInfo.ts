import { PostalAddress } from '@models/swagger/App/Domain/Common/Entities/Address/PostalAddress';
import { LinkedinMediaItem } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Linkedin/Locations/MediaItems/LinkedinMediaItem';

export const LinkedinLocationInfoObjectType = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_Connection_Token_LinkedinLocationInfo:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\Connection\\Token\\LinkedinLocationInfo',
};

export const LinkedinLocationInfoObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_Connection_Token_LinkedinLocationInfo:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\Connection\\Token\\LinkedinLocationInfo',
} as const;

export type LinkedinLocationInfo = {
  /**
   * The id associated with the connected Linkedin Location/Page
   */
  locationId?: string;
  /**
   * The name of the connected Linkedin Location/Page
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
   * Linkedin Page Url
   */
  locationUrl?: string;
  logoPictureDetails?: LinkedinMediaItem;
  /**
   * Linkedin Page profile picture
   */
  locationProfilePictureUrl?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LinkedinLocationInfoObjectType)[keyof typeof LinkedinLocationInfoObjectType];
};
