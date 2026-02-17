import { PostalAddress } from '@models/swagger/App/Domain/Common/Entities/Address/PostalAddress';
import { Company } from '@models/swagger/App/Domain/Common/Entities/Company/Company';
import { ContactInfos } from '@models/swagger/App/Domain/Common/Entities/ContactInfos/ContactInfos';
import { GoogleIds } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Common/GoogleIds';
import { GoogleCategories } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Categories/GoogleCategories';
import { GoogleLocationOpenInfo } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/OpenInfo/GoogleLocationOpenInfo';
import { LocationMediaItems } from '@models/swagger/App/Domain/Presence/Entities/Locations/MediaItems/LocationMediaItems';
import { GooglePlaceReputation } from '@models/swagger/App/Domain/Reputation/Entities/ListingServices/Google/Places/Reputation/GooglePlaceReputation';
import { Website } from '@models/swagger/App/Domain/Seo/Entities/Website';

export const ArgusGraphLocationObjectType = {
  App_Domain_Presence_Entities_ListingServices_Argus_Locations_ArgusGraphLocation:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Argus\\Locations\\ArgusGraphLocation',
};

export const ArgusGraphLocationObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Argus_Locations_ArgusGraphLocation:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Argus\\Locations\\ArgusGraphLocation',
} as const;

export type ArgusGraphLocation = {
  /**
   * Argus identifier for ArgusLocation
   */
  argusId?: string;
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
  /**
   * Price level
   */
  priceLevel?: number;
  openInfo?: GoogleLocationOpenInfo;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ArgusGraphLocationObjectType)[keyof typeof ArgusGraphLocationObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
