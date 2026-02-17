import { Keywords } from '@models/swagger/App/Domain/Common/Entities/Keywords/Keywords';
import { LocationKeyword } from '@models/swagger/App/Domain/Presence/Entities/Locations/Keywords/LocationKeyword';

export const LocationKeywordsObjectType = {
  App_Domain_Presence_Entities_Locations_Keywords_LocationKeywords:
    'App\\Domain\\Presence\\Entities\\Locations\\Keywords\\LocationKeywords',
};

export const LocationKeywordsObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Keywords_LocationKeywords:
    'App\\Domain\\Presence\\Entities\\Locations\\Keywords\\LocationKeywords',
} as const;

export type LocationKeywords = {
  keywords?: Keywords;
  elements?: LocationKeyword[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationKeywordsObjectType)[keyof typeof LocationKeywordsObjectType];
};
