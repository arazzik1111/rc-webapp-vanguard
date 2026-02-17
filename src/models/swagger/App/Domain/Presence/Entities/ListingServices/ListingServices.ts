import { FacebookListingService } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/FacebookListingService';
import { GoogleListingService } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/GoogleListingService';
import { InstagramListingService } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Instagram/InstagramListingService';
import { LinkedinListingService } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Linkedin/LinkedinListingService';
import { UberallListingService } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Uberall/UberallListingService';
import { XListingService } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/X/XListingService';
import { YextListingService } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Yext/YextListingService';

export const ListingServicesObjectType = {
  App_Domain_Presence_Entities_ListingServices_ListingServices:
    'App\\Domain\\Presence\\Entities\\ListingServices\\ListingServices',
};

export const ListingServicesObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_ListingServices:
    'App\\Domain\\Presence\\Entities\\ListingServices\\ListingServices',
} as const;

export type ListingServices = {
  elements?: Array<
    | GoogleListingService
    | UberallListingService
    | YextListingService
    | FacebookListingService
    | InstagramListingService
    | LinkedinListingService
    | XListingService
  >;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ListingServicesObjectType)[keyof typeof ListingServicesObjectType];
};
