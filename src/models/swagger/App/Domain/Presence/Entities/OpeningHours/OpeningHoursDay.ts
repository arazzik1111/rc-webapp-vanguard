import { OpeningHoursDayInterval } from '@models/swagger/App/Domain/Presence/Entities/OpeningHours/OpeningHoursDayInterval';

export const OpeningHoursDayObjectType = {
  App_Domain_Presence_Entities_OpeningHours_OpeningHoursDay:
    'App\\Domain\\Presence\\Entities\\OpeningHours\\OpeningHoursDay',
};

export const OpeningHoursDayObjectTypeStrict = {
  App_Domain_Presence_Entities_OpeningHours_OpeningHoursDay:
    'App\\Domain\\Presence\\Entities\\OpeningHours\\OpeningHoursDay',
} as const;

export type OpeningHoursDay = {
  /**
   * Information whether it is open or not
   */
  open?: boolean;
  /**
   * Information whether it is open all day or not
   */
  openAllDay?: boolean;
  /**
   * The day of week for which the opening hours apply
   */
  dayOfWeek?: string;
  elements?: OpeningHoursDayInterval[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof OpeningHoursDayObjectType)[keyof typeof OpeningHoursDayObjectType];
};
