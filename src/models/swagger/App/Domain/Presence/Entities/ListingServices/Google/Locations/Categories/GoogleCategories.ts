import { Locale } from '@models/swagger/App/Domain/Common/Entities/Locales/Locale';
import { GoogleCategory } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Categories/GoogleCategory';

export const GoogleCategoriesObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Categories_GoogleCategories:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Categories\\GoogleCategories',
};

export const GoogleCategoriesObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Categories_GoogleCategories:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Categories\\GoogleCategories',
} as const;

export type GoogleCategories = {
  locale?: Locale;
  elements?: GoogleCategory[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleCategoriesObjectType)[keyof typeof GoogleCategoriesObjectType];
};
