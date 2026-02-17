import { PostalAddress } from '@models/swagger/App/Domain/Common/Entities/Address/PostalAddress';
import { ContactInfos } from '@models/swagger/App/Domain/Common/Entities/ContactInfos/ContactInfos';
import { GoogleCategories } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Categories/GoogleCategories';
import { ServiceAreas } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Places/ServiceAreas/ServiceAreas';

export const AIBusinessContextServiceAreaType = {
  BUSINESS_TYPE_UNSPECIFIED: 'BUSINESS_TYPE_UNSPECIFIED',
  CUSTOMER_LOCATION_ONLY: 'CUSTOMER_LOCATION_ONLY',
  CUSTOMER_AND_BUSINESS_LOCATION: 'CUSTOMER_AND_BUSINESS_LOCATION',
};

export const AIBusinessContextServiceAreaTypeStrict = {
  BUSINESS_TYPE_UNSPECIFIED: 'BUSINESS_TYPE_UNSPECIFIED',
  CUSTOMER_LOCATION_ONLY: 'CUSTOMER_LOCATION_ONLY',
  CUSTOMER_AND_BUSINESS_LOCATION: 'CUSTOMER_AND_BUSINESS_LOCATION',
} as const;

export const AIBusinessContextObjectType = {
  App_Domain_AI_Entities_Settings_AIContentSettings_AIBusinessContext:
    'App\\Domain\\AI\\Entities\\Settings\\AIContentSettings\\AIBusinessContext',
};

export const AIBusinessContextObjectTypeStrict = {
  App_Domain_AI_Entities_Settings_AIContentSettings_AIBusinessContext:
    'App\\Domain\\AI\\Entities\\Settings\\AIContentSettings\\AIBusinessContext',
} as const;

export type AIBusinessContext = {
  /**
   * Doing business as name - the company brand known to customers
   */
  doingBusinessAsName?: string;
  /**
   * Short description about the Business
   */
  shortDescription?: string;
  /**
   * Specifies the place where the business offers it's products and services, either on its own location or at customer location or both
   *  Allowed Values:
   * -   `BUSINESS_TYPE_UNSPECIFIED`
   * -   `CUSTOMER_LOCATION_ONLY`
   * -   `CUSTOMER_AND_BUSINESS_LOCATION`
   *
   */
  serviceAreaType?: (typeof AIBusinessContextServiceAreaType)[keyof typeof AIBusinessContextServiceAreaType];
  address?: PostalAddress;
  contactInfos?: ContactInfos;
  categories?: GoogleCategories;
  serviceAreas?: ServiceAreas;
  /**
   * If true, Address is considered in prompt
   */
  considerAddressInPrompt?: boolean;
  /**
   * If true, ContactInfos is considered in prompt
   */
  considerContactInfosInPrompt?: boolean;
  /**
   * If true, Categories is considered in prompt
   */
  considerCategoriesInPrompt?: boolean;
  /**
   * If true, short description is considered in prompt
   */
  considerShortDescriptionInPrompt?: boolean;
  /**
   * If true, setting is considered, otherwise it is omitted
   */
  considerInPrompt?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AIBusinessContextObjectType)[keyof typeof AIBusinessContextObjectType];
};
