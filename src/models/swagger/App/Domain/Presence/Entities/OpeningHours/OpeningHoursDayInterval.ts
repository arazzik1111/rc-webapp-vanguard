export const OpeningHoursDayIntervalObjectType = {
  App_Domain_Presence_Entities_OpeningHours_OpeningHoursDayInterval:
    'App\\Domain\\Presence\\Entities\\OpeningHours\\OpeningHoursDayInterval',
};

export const OpeningHoursDayIntervalObjectTypeStrict = {
  App_Domain_Presence_Entities_OpeningHours_OpeningHoursDayInterval:
    'App\\Domain\\Presence\\Entities\\OpeningHours\\OpeningHoursDayInterval',
} as const;

export type OpeningHoursDayInterval = {
  /**
   * Opening time for the interval
   * :00
   */
  from?: string;
  /**
   * Closing time for the interval
   * :00
   */
  to?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof OpeningHoursDayIntervalObjectType)[keyof typeof OpeningHoursDayIntervalObjectType];
};
