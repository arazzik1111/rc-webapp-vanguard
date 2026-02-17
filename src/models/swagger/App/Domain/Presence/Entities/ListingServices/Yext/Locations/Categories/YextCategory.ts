import { GoogleCategory } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Categories/GoogleCategory';

export const YextCategoryObjectType = {
  App_Domain_Presence_Entities_ListingServices_Yext_Locations_Categories_YextCategory:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Yext\\Locations\\Categories\\YextCategory',
};

export const YextCategoryObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Yext_Locations_Categories_YextCategory:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Yext\\Locations\\Categories\\YextCategory',
} as const;

export type YextCategory = {
  /**
   * The name of the yext category
   */
  name?: string;
  /**
   * The Live ID of the Markee Category as defined in their system
   */
  liveId?: number;
  /**
   * The Test ID of the Markee Category as defined in their system. This will be used for the sandbox
   */
  testId?: number;
  /**
   * Categories which do not exist anymore will be marked as inactive
   */
  active?: boolean;
  /**
   * The ID of the Yext Category as defined in their system.
   */
  yextCategoryId?: number;
  /**
   * The id of the Google category associated
   */
  googleCategoryId?: number;
  googleCategory?: GoogleCategory;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof YextCategoryObjectType)[keyof typeof YextCategoryObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
