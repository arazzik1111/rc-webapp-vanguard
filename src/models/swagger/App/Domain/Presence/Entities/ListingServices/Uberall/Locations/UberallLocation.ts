import { AdAccount } from '@models/swagger/App/Domain/Ads/Entities/AdAccount';
import { PostalAddress } from '@models/swagger/App/Domain/Common/Entities/Address/PostalAddress';
import { Company } from '@models/swagger/App/Domain/Common/Entities/Company/Company';
import { ContactInfos } from '@models/swagger/App/Domain/Common/Entities/ContactInfos/ContactInfos';
import { Locale } from '@models/swagger/App/Domain/Common/Entities/Locales/Locale';
import { Business } from '@models/swagger/App/Domain/Presence/Entities/Business';
import { ListingServices } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/ListingServices';
import { LocationCategories } from '@models/swagger/App/Domain/Presence/Entities/Locations/Categories/LocationCategories';
import { LocationCompetitors } from '@models/swagger/App/Domain/Presence/Entities/Locations/Competitors/LocationCompetitors';
import { Description } from '@models/swagger/App/Domain/Presence/Entities/Locations/Description/Description';
import { LocationEngagement } from '@models/swagger/App/Domain/Presence/Entities/Locations/Engagement/LocationEngagement';
import { LocationKeywords } from '@models/swagger/App/Domain/Presence/Entities/Locations/Keywords/LocationKeywords';
import { Listings } from '@models/swagger/App/Domain/Presence/Entities/Locations/Listings/Listings';
import { LocationListingServiceLocationSupportedPropertiesToSync } from '@models/swagger/App/Domain/Presence/Entities/Locations/ListingServices/Connection/LocationListingServiceLocationSupportedPropertiesToSync';
import { LocationListingServices } from '@models/swagger/App/Domain/Presence/Entities/Locations/ListingServices/LocationListingServices';
import { LocationMediaItems } from '@models/swagger/App/Domain/Presence/Entities/Locations/MediaItems/LocationMediaItems';
import { Posts } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/Posts';
import { LocationServiceAreas } from '@models/swagger/App/Domain/Presence/Entities/Locations/ServiceAreas/LocationServiceAreas';
import { LocationSettings } from '@models/swagger/App/Domain/Presence/Entities/Locations/Settings/LocationSettings';
import { LocationTasks } from '@models/swagger/App/Domain/Presence/Entities/Locations/Tasks/LocationTasks';
import { LocationVisibilityIndex } from '@models/swagger/App/Domain/Presence/Entities/Locations/VisibilityIndex/LocationVisibilityIndex';
import { OpeningHours } from '@models/swagger/App/Domain/Presence/Entities/OpeningHours/OpeningHours';
import { LocationReputation } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/LocationReputation';
import { LocationSeo } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/LocationSeo';
import { Website } from '@models/swagger/App/Domain/Seo/Entities/Website';
import { SetupSequenceCompletions } from '@models/swagger/App/Domain/Setup/Entities/SetupSequences/SetupSequenceCompletions/SetupSequenceCompletions';
import { SetupSequences } from '@models/swagger/App/Domain/Setup/Entities/SetupSequences/SetupSequences';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const UberallLocationUberallStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  CANCELLED: 'CANCELLED',
  CLOSED: 'CLOSED',
};

export const UberallLocationUberallStatusStrict = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  CANCELLED: 'CANCELLED',
  CLOSED: 'CLOSED',
} as const;

export const UberallLocationServiceAreaType = {
  BUSINESS_TYPE_UNSPECIFIED: 'BUSINESS_TYPE_UNSPECIFIED',
  CUSTOMER_LOCATION_ONLY: 'CUSTOMER_LOCATION_ONLY',
  CUSTOMER_AND_BUSINESS_LOCATION: 'CUSTOMER_AND_BUSINESS_LOCATION',
};

export const UberallLocationServiceAreaTypeStrict = {
  BUSINESS_TYPE_UNSPECIFIED: 'BUSINESS_TYPE_UNSPECIFIED',
  CUSTOMER_LOCATION_ONLY: 'CUSTOMER_LOCATION_ONLY',
  CUSTOMER_AND_BUSINESS_LOCATION: 'CUSTOMER_AND_BUSINESS_LOCATION',
} as const;

export const UberallLocationObjectType = {
  App_Domain_Presence_Entities_ListingServices_Uberall_Locations_UberallLocation:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Uberall\\Locations\\UberallLocation',
};

export const UberallLocationObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Uberall_Locations_UberallLocation:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Uberall\\Locations\\UberallLocation',
} as const;

export type UberallLocation = {
  /**
   * The Uberall Location id
   */
  uberallLocationId?: string;
  /**
   * The Uberall Business id
   */
  uberallBusinessId?: string;
  /**
   * dateTime of the last performed sycned
   */
  lastSyncDate?: string;
  /**
   * The status of the location.
   *  Allowed Values:
   * -   `ACTIVE`: will be synced and renewed
   * -   `INACTIVE`: will not be synced anymore, claims of listings will be released where possible
   * -   `CANCELLED`: will be synced, will not be renewed. Once endDate is reached, location will switch to inactive
   * -   `CLOSED`: location has shut down, we'll mark listings as permanently closed or remove listings from the internet where permanently closed status is not supported
   *
   */
  uberallStatus?: (typeof UberallLocationUberallStatus)[keyof typeof UberallLocationUberallStatus];
  /**
   * the status of the subscription
   */
  subscriptionStatus?: string;
  supportedPropertiesToSync?: LocationListingServiceLocationSupportedPropertiesToSync;
  mediaItems?: LocationMediaItems;
  openingHours?: OpeningHours;
  categories?: LocationCategories;
  keywords?: LocationKeywords;
  website?: Website;
  seo?: LocationSeo;
  locationListingServices?: LocationListingServices;
  listingServices?: ListingServices;
  visibilityIndex?: LocationVisibilityIndex;
  settings?: LocationSettings;
  competitors?: LocationCompetitors;
  reputation?: LocationReputation;
  setupSequenceCompletions?: SetupSequenceCompletions;
  setupSequences?: SetupSequences;
  /**
   * The id of the Location
   */
  businessId?: number;
  business?: Business;
  company?: Company;
  contactInfos?: ContactInfos;
  address?: PostalAddress;
  /**
   * Location's language code
   */
  languageCode?: string;
  locale?: Locale;
  interfaceLocale?: Locale;
  description?: Description;
  /**
   * Specifies if the location is locally focused or nationwide
   */
  isLocallyFocused?: string;
  /**
   * Specifies the place where the business offers it's products and services, either on its own location or at customer location or both
   *  Allowed Values:
   * -   `BUSINESS_TYPE_UNSPECIFIED`: Output only. Not specified.
   * -   `CUSTOMER_LOCATION_ONLY`: Offers service only in the surrounding area (not at the business address)
   * -   `CUSTOMER_AND_BUSINESS_LOCATION`: Offers service at the business address and the surrounding area
   *
   */
  serviceAreaType?: (typeof UberallLocationServiceAreaType)[keyof typeof UberallLocationServiceAreaType];
  /**
   * Location's radius
   */
  radius?: number;
  serviceAreas?: LocationServiceAreas;
  listings?: Listings;
  /**
   * Location's WebsiteId
   */
  websiteId?: number;
  /**
   * Location's name (Project name)
   */
  name?: string;
  posts?: Posts;
  engagement?: LocationEngagement;
  adAccount?: AdAccount;
  tasks?: LocationTasks;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof UberallLocationObjectType)[keyof typeof UberallLocationObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
