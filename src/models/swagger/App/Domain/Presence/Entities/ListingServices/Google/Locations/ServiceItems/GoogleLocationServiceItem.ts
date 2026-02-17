import { MoneyAmount } from '@models/swagger/App/Domain/Common/Entities/Money/MoneyAmount';
import { GoogleCategory } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Categories/GoogleCategory';

export const GoogleLocationServiceItemObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_ServiceItems_GoogleLocationServiceItem:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\ServiceItems\\GoogleLocationServiceItem',
};

export const GoogleLocationServiceItemObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_ServiceItems_GoogleLocationServiceItem:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\ServiceItems\\GoogleLocationServiceItem',
} as const;

export type GoogleLocationServiceItem = {
  price?: MoneyAmount;
  /**
   * Required for structured service item
   */
  serviceTypeId?: string;
  /**
   * Description for structured service item
   */
  description?: string;
  category?: GoogleCategory;
  /**
   * Required. Display name for free form service item.
   */
  displayName?: string;
  /**
   * Optional. The BCP-47 language code that these strings apply for.
   */
  languageCode?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleLocationServiceItemObjectType)[keyof typeof GoogleLocationServiceItemObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
