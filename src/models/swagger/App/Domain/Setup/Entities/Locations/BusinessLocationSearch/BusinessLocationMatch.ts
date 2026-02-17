import { PostalAddress } from '@models/swagger/App/Domain/Common/Entities/Address/PostalAddress';
import { Company } from '@models/swagger/App/Domain/Common/Entities/Company/Company';
import { ContactInfos } from '@models/swagger/App/Domain/Common/Entities/ContactInfos/ContactInfos';
import { FacebookPage } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/Pages/FacebookPage';
import { GooglePlace } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Places/GooglePlace';
import { Description } from '@models/swagger/App/Domain/Presence/Entities/Locations/Description/Description';
import { LocationMediaItems } from '@models/swagger/App/Domain/Presence/Entities/Locations/MediaItems/LocationMediaItems';
import { Website } from '@models/swagger/App/Domain/Seo/Entities/Website';

export const BusinessLocationMatchSource = {
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK',
};

export const BusinessLocationMatchSourceStrict = {
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK',
} as const;

export const BusinessLocationMatchObjectType = {
  App_Domain_Setup_Entities_Locations_BusinessLocationSearch_BusinessLocationMatch:
    'App\\Domain\\Setup\\Entities\\Locations\\BusinessLocationSearch\\BusinessLocationMatch',
};

export const BusinessLocationMatchObjectTypeStrict = {
  App_Domain_Setup_Entities_Locations_BusinessLocationSearch_BusinessLocationMatch:
    'App\\Domain\\Setup\\Entities\\Locations\\BusinessLocationSearch\\BusinessLocationMatch',
} as const;

export type BusinessLocationMatch = {
  /**
   * The total score of the match based on the relevance and distance
   */
  totalScore?: number;
  /**
   * The relevance score of the match based on the search query
   */
  relevanceScore?: number;
  /**
   * The distance score of the match based on the distance
   */
  distanceScore?: number;
  /**
   * The name of the business location
   */
  name?: string;
  /**
   * The unique identifier of the business location
   */
  sourceId: string;
  /**
   * The source of the business location
   *  Allowed Values:
   * -   `GOOGLE`: Potential source of the match
   * -   `FACEBOOK`: Potential source of the match
   *
   */
  source: (typeof BusinessLocationMatchSource)[keyof typeof BusinessLocationMatchSource];
  company?: Company;
  contactInfos?: ContactInfos;
  address?: PostalAddress;
  website?: Website;
  mediaItems?: LocationMediaItems;
  description?: Description;
  /**
   * The URL of the source of the business location
   */
  sourceUrl?: string;
  /**
   * The source location of the business location
   */
  sourceLocation?: GooglePlace | FacebookPage;
  /**
   * The language code of the business location
   */
  languageCode?: string;
  /**
   * The country short code of the business location
   */
  countryShortCode?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BusinessLocationMatchObjectType)[keyof typeof BusinessLocationMatchObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
