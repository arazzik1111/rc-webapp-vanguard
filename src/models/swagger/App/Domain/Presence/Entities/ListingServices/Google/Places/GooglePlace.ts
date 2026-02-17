import { PostalAddress } from '@models/swagger/App/Domain/Common/Entities/Address/PostalAddress';
import { Company } from '@models/swagger/App/Domain/Common/Entities/Company/Company';
import { ContactInfos } from '@models/swagger/App/Domain/Common/Entities/ContactInfos/ContactInfos';
import { GoogleIds } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Common/GoogleIds';
import { GoogleCategories } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Categories/GoogleCategories';
import { GoogleLocationOpenInfo } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/OpenInfo/GoogleLocationOpenInfo';
import { GooglePlaceTypes } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Places/PlaceTypes/GooglePlaceTypes';
import { ServiceArea } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Places/ServiceAreas/ServiceArea';
import { LocationMediaItems } from '@models/swagger/App/Domain/Presence/Entities/Locations/MediaItems/LocationMediaItems';
import { OpeningHours } from '@models/swagger/App/Domain/Presence/Entities/OpeningHours/OpeningHours';
import { GooglePlaceReputation } from '@models/swagger/App/Domain/Reputation/Entities/ListingServices/Google/Places/Reputation/GooglePlaceReputation';
import { Website } from '@models/swagger/App/Domain/Seo/Entities/Website';

export const GooglePlaceObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Places_GooglePlace:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Places\\GooglePlace',
};

export const GooglePlaceObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Places_GooglePlace:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Places\\GooglePlace',
} as const;

export type GooglePlace = {
  /**
   * The place name, this is not necessary a company name, as it can also be a region
   */
  placeName?: string;
  /**
   * Google Place ID, not to be confused with Google Maps ID (cid) or Google My Business / Google Business Profile ID
   */
  googlePlaceId?: string;
  company?: Company;
  contactInfos?: ContactInfos;
  address?: PostalAddress;
  googleIds?: GoogleIds;
  categories?: GoogleCategories;
  reputation?: GooglePlaceReputation;
  website?: Website;
  mediaItems?: LocationMediaItems;
  /**
   * GooglePlace's language code
   */
  languageCode?: string;
  priceLevel?: number;
  openInfo?: GoogleLocationOpenInfo;
  types?: GooglePlaceTypes;
  serviceArea?: ServiceArea;
  openingHours?: OpeningHours;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GooglePlaceObjectType)[keyof typeof GooglePlaceObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
