import { AdAccount } from '@models/swagger/App/Domain/Ads/Entities/AdAccount';
import { InstagramAccounts } from '@models/swagger/App/Domain/Ads/Entities/Facebook/InstagramAccounts';
import { MetaAdAccounts } from '@models/swagger/App/Domain/Ads/Entities/Facebook/MetaAdAccounts/MetaAdAccounts';
import { PostalAddress } from '@models/swagger/App/Domain/Common/Entities/Address/PostalAddress';
import { Company } from '@models/swagger/App/Domain/Common/Entities/Company/Company';
import { ContactInfos } from '@models/swagger/App/Domain/Common/Entities/ContactInfos/ContactInfos';
import { Locale } from '@models/swagger/App/Domain/Common/Entities/Locales/Locale';
import { Business } from '@models/swagger/App/Domain/Presence/Entities/Business';
import { InstagramConnectionProfile } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Instagram/Locations/Connection/InstagramConnectionProfile';
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

export const FacebookLocationServiceAreaType = {
  BUSINESS_TYPE_UNSPECIFIED: 'BUSINESS_TYPE_UNSPECIFIED',
  CUSTOMER_LOCATION_ONLY: 'CUSTOMER_LOCATION_ONLY',
  CUSTOMER_AND_BUSINESS_LOCATION: 'CUSTOMER_AND_BUSINESS_LOCATION',
};

export const FacebookLocationServiceAreaTypeStrict = {
  BUSINESS_TYPE_UNSPECIFIED: 'BUSINESS_TYPE_UNSPECIFIED',
  CUSTOMER_LOCATION_ONLY: 'CUSTOMER_LOCATION_ONLY',
  CUSTOMER_AND_BUSINESS_LOCATION: 'CUSTOMER_AND_BUSINESS_LOCATION',
} as const;

export const FacebookLocationObjectType = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_FacebookLocation:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\FacebookLocation',
};

export const FacebookLocationObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_FacebookLocation:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\FacebookLocation',
} as const;

export type FacebookLocation = {
  /**
   * The Facebook Page ID
   */
  externalId?: string;
  /**
   * The Facebook Page URL
   */
  pageUrl?: string;
  /**
   * The Facebook Page Profile Picture URL
   */
  pageProfilePictureUrl?: string;
  /**
   * - Check Facebook New Experience
   */
  hasNewPageExperience?: boolean;
  /**
   * The Facebook Page primary category
   */
  facebookCategoryName?: string;
  /**
   * Temporary status - used for opening hours update
   */
  temporaryStatus?: string;
  mediaItems?: LocationMediaItems;
  instagramProfile?: InstagramConnectionProfile;
  /**
   * Facebook Page profile picture
   */
  locationProfilePictureUrl?: string;
  metaAdAccounts?: MetaAdAccounts;
  /**
   * Facebook Page Token
   */
  pageToken?: string;
  instagramAccounts?: InstagramAccounts;
  /**
   * The Facebook Page's verification status
   */
  verificationStatus?: string;
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
  serviceAreaType?: (typeof FacebookLocationServiceAreaType)[keyof typeof FacebookLocationServiceAreaType];
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
  objectType: (typeof FacebookLocationObjectType)[keyof typeof FacebookLocationObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
