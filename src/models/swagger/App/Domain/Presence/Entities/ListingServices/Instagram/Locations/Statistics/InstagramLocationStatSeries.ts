import { DateValue } from '@models/swagger/App/Domain/Common/Entities/Charts/DateValue';

export const InstagramLocationStatSeriesObjectType = {
  App_Domain_Presence_Entities_ListingServices_Instagram_Locations_Statistics_InstagramLocationStatSeries:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Instagram\\Locations\\Statistics\\InstagramLocationStatSeries',
};

export const InstagramLocationStatSeriesObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Instagram_Locations_Statistics_InstagramLocationStatSeries:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Instagram\\Locations\\Statistics\\InstagramLocationStatSeries',
} as const;

export type InstagramLocationStatSeries = {
  /**
   * Insight type name
   */
  name: string;
  elements?: DateValue[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof InstagramLocationStatSeriesObjectType)[keyof typeof InstagramLocationStatSeriesObjectType];
};
