import { YextCategories } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Yext/Locations/Categories/YextCategories';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const GoogleCategoryObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Categories_GoogleCategory:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Categories\\GoogleCategory',
};

export const GoogleCategoryObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Categories_GoogleCategory:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Categories\\GoogleCategory',
} as const;

export type GoogleCategory = {
  /**
   * The name of the google category
   */
  name?: string;
  /**
   * The external Id from google
   */
  externalId?: string;
  /**
   * Whether this is a customer selectable category or not. Too general categories are not selectable
   */
  isSelectable?: boolean;
  /**
   * Whether the category is active or not
   */
  isActive?: boolean;
  /**
   * Whether this is an explicit category, e.g. sexual services or not
   */
  isExplicitContent?: boolean;
  /**
   * Whether this is a sensitive category, e.g. banking services, relevant for fraud detection
   */
  isSensitiveCategory?: boolean;
  /**
   * Whether this is a lodging category, e.g. hotel, hostel etc., relevant for Google Sync as description cannot be updated on these
   */
  isLodgingCategory?: boolean;
  /**
   * Some category types are considered sensitive by google and require manual permits to be used
   */
  isRestricted?: boolean;
  /**
   * The external Id from google
   */
  yextId?: string;
  yextCategories?: YextCategories;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleCategoryObjectType)[keyof typeof GoogleCategoryObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
