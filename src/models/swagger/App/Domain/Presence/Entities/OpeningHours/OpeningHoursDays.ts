import { OpeningHoursDay } from '@models/swagger/App/Domain/Presence/Entities/OpeningHours/OpeningHoursDay';

export const OpeningHoursDaysObjectType = {
  App_Domain_Presence_Entities_OpeningHours_OpeningHoursDays:
    'App\\Domain\\Presence\\Entities\\OpeningHours\\OpeningHoursDays',
};

export const OpeningHoursDaysObjectTypeStrict = {
  App_Domain_Presence_Entities_OpeningHours_OpeningHoursDays:
    'App\\Domain\\Presence\\Entities\\OpeningHours\\OpeningHoursDays',
} as const;

export type OpeningHoursDays = {
  elements?: OpeningHoursDay[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof OpeningHoursDaysObjectType)[keyof typeof OpeningHoursDaysObjectType];
};
