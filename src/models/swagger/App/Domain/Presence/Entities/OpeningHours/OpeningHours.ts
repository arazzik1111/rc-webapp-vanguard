import { OpeningHoursDays } from '@models/swagger/App/Domain/Presence/Entities/OpeningHours/OpeningHoursDays';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const OpeningHoursFirstDayOfWeek = {
  mon: 'mon',
  sun: 'sun',
};

export const OpeningHoursFirstDayOfWeekStrict = {
  mon: 'mon',
  sun: 'sun',
} as const;

export const OpeningHoursObjectType = {
  App_Domain_Presence_Entities_OpeningHours_OpeningHours: 'App\\Domain\\Presence\\Entities\\OpeningHours\\OpeningHours',
};

export const OpeningHoursObjectTypeStrict = {
  App_Domain_Presence_Entities_OpeningHours_OpeningHours: 'App\\Domain\\Presence\\Entities\\OpeningHours\\OpeningHours',
} as const;

export type OpeningHours = {
  openingHours?: OpeningHoursDays;
  /**
   * Information whether it is always open or not
   */
  alwaysOpen?: boolean;
  /**
   * Information whether there are no hours available
   */
  noHoursAvailable?: boolean;
  /**
   * Information whether it is open on selected hours
   */
  openOnSelectedHours?: boolean;
  /**
   * Additional notes regarding the opening hours
   */
  notes?: string;
  /**
   * The day, the week starts
   *  Allowed Values:
   * -   `mon`
   * -   `sun`
   *
   */
  firstDayOfWeek?: (typeof OpeningHoursFirstDayOfWeek)[keyof typeof OpeningHoursFirstDayOfWeek];
  /**
   * The id of the parent location
   */
  locationId?: string | number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof OpeningHoursObjectType)[keyof typeof OpeningHoursObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
