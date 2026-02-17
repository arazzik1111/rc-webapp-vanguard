import { GooglePlaceType } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Places/PlaceTypes/GooglePlaceType';

export const GooglePlaceTypesObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Places_PlaceTypes_GooglePlaceTypes:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Places\\PlaceTypes\\GooglePlaceTypes',
};

export const GooglePlaceTypesObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Places_PlaceTypes_GooglePlaceTypes:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Places\\PlaceTypes\\GooglePlaceTypes',
} as const;

export type GooglePlaceTypes = {
  elements?: GooglePlaceType[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GooglePlaceTypesObjectType)[keyof typeof GooglePlaceTypesObjectType];
};
