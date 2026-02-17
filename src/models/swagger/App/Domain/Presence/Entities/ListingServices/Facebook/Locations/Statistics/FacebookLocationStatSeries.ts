import { DateValue } from '@models/swagger/App/Domain/Common/Entities/Charts/DateValue';

export const FacebookLocationStatSeriesObjectType = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_Statistics_FacebookLocationStatSeries:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\Statistics\\FacebookLocationStatSeries',
};

export const FacebookLocationStatSeriesObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_Statistics_FacebookLocationStatSeries:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\Statistics\\FacebookLocationStatSeries',
} as const;

export type FacebookLocationStatSeries = {
  /**
   * Insight type name
   */
  name: string;
  elements?: DateValue[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FacebookLocationStatSeriesObjectType)[keyof typeof FacebookLocationStatSeriesObjectType];
};
