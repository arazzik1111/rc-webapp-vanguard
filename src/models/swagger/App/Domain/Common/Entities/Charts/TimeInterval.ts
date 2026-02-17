export const TimeIntervalObjectType = {
  App_Domain_Common_Entities_Charts_TimeInterval: 'App\\Domain\\Common\\Entities\\Charts\\TimeInterval',
};

export const TimeIntervalObjectTypeStrict = {
  App_Domain_Common_Entities_Charts_TimeInterval: 'App\\Domain\\Common\\Entities\\Charts\\TimeInterval',
} as const;

export type TimeInterval = {
  startDate?: string;
  endDate?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof TimeIntervalObjectType)[keyof typeof TimeIntervalObjectType];
};
