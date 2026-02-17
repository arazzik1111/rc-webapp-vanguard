import { AdAccount } from '@models/swagger/App/Domain/Ads/Entities/AdAccount';
import { PostalAddress } from '@models/swagger/App/Domain/Common/Entities/Address/PostalAddress';
import { Company } from '@models/swagger/App/Domain/Common/Entities/Company/Company';
import { ContactInfos } from '@models/swagger/App/Domain/Common/Entities/ContactInfos/ContactInfos';
import { Locale } from '@models/swagger/App/Domain/Common/Entities/Locales/Locale';
import { Business } from '@models/swagger/App/Domain/Presence/Entities/Business';
import { GoogleIds } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Common/GoogleIds';
import { GoogleLocationAdmins } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Admins/GoogleLocationAdmins';
import { GoogleLocationAttributes } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Attributes/GoogleLocationAttributes';
import { GoogleLocationState } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/LocationState/GoogleLocationState';
import { GoogleLocationMetadata } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Metadata/GoogleLocationMetadata';
import { GoogleLocationOpenInfo } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/OpenInfo/GoogleLocationOpenInfo';
import { GoogleLocationServiceItems } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/ServiceItems/GoogleLocationServiceItems';
import { GoogleLocationServiceTypes } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/ServiceTypes/GoogleLocationServiceTypes';
import { GoogleLocationKeywordsStatistics } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Statistics/GoogleLocationKeywordsStatistics';
import { GoogleLocationStatistics } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Statistics/GoogleLocationStatistics';
import { GoogleLocationVerifications } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Verifications/GoogleLocationVerifications';
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

export const GoogleLocationServiceAreaType = {
  BUSINESS_TYPE_UNSPECIFIED: 'BUSINESS_TYPE_UNSPECIFIED',
  CUSTOMER_LOCATION_ONLY: 'CUSTOMER_LOCATION_ONLY',
  CUSTOMER_AND_BUSINESS_LOCATION: 'CUSTOMER_AND_BUSINESS_LOCATION',
};

export const GoogleLocationServiceAreaTypeStrict = {
  BUSINESS_TYPE_UNSPECIFIED: 'BUSINESS_TYPE_UNSPECIFIED',
  CUSTOMER_LOCATION_ONLY: 'CUSTOMER_LOCATION_ONLY',
  CUSTOMER_AND_BUSINESS_LOCATION: 'CUSTOMER_AND_BUSINESS_LOCATION',
} as const;

export const GoogleLocationObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_GoogleLocation:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\GoogleLocation',
};

export const GoogleLocationObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_GoogleLocation:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\GoogleLocation',
} as const;

export type GoogleLocation = {
  googleIds?: GoogleIds;
  metadata?: GoogleLocationMetadata;
  openInfo?: GoogleLocationOpenInfo;
  statistics?: GoogleLocationStatistics;
  keywordsStatistics?: GoogleLocationKeywordsStatistics;
  attributes?: GoogleLocationAttributes;
  serviceTypes?: GoogleLocationServiceTypes;
  serviceItems?: GoogleLocationServiceItems;
  mediaItems?: LocationMediaItems;
  locationAdmins?: GoogleLocationAdmins;
  locationState?: GoogleLocationState;
  verifications?: GoogleLocationVerifications;
  /**
   * If false, the GoogleLocation lies in an unsupported Country
   */
  hasSupportedCountryCode?: boolean;
  supportedPropertiesToSync?: LocationListingServiceLocationSupportedPropertiesToSync;
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
  serviceAreaType?: (typeof GoogleLocationServiceAreaType)[keyof typeof GoogleLocationServiceAreaType];
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
  objectType: (typeof GoogleLocationObjectType)[keyof typeof GoogleLocationObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
