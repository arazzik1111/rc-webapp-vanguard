import { VisibilityIndexDateValueSequence } from '@models/swagger/App/Domain/Presence/Entities/Locations/VisibilityIndex/VisibilityIndexDateValueSequence';

export const LocationVisibilityIndexObjectType = {
  App_Domain_Presence_Entities_Locations_VisibilityIndex_LocationVisibilityIndex:
    'App\\Domain\\Presence\\Entities\\Locations\\VisibilityIndex\\LocationVisibilityIndex',
};

export const LocationVisibilityIndexObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_VisibilityIndex_LocationVisibilityIndex:
    'App\\Domain\\Presence\\Entities\\Locations\\VisibilityIndex\\LocationVisibilityIndex',
} as const;

export type LocationVisibilityIndex = {
  elements?: VisibilityIndexDateValueSequence[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationVisibilityIndexObjectType)[keyof typeof LocationVisibilityIndexObjectType];
};
