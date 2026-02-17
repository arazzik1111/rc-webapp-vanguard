import { DateValue } from '@models/swagger/App/Domain/Common/Entities/Charts/DateValue';

export const GoogleLocationStatisticsDateValueSequenceName = {
  BUSINESS_IMPRESSIONS_DESKTOP_MAPS: 'BUSINESS_IMPRESSIONS_DESKTOP_MAPS',
  BUSINESS_IMPRESSIONS_DESKTOP_SEARCH: 'BUSINESS_IMPRESSIONS_DESKTOP_SEARCH',
  BUSINESS_IMPRESSIONS_MOBILE_MAPS: 'BUSINESS_IMPRESSIONS_MOBILE_MAPS',
  BUSINESS_IMPRESSIONS_MOBILE_SEARCH: 'BUSINESS_IMPRESSIONS_MOBILE_SEARCH',
  BUSINESS_CONVERSATIONS: 'BUSINESS_CONVERSATIONS',
  BUSINESS_DIRECTION_REQUESTS: 'BUSINESS_DIRECTION_REQUESTS',
  CALL_CLICKS: 'CALL_CLICKS',
  WEBSITE_CLICKS: 'WEBSITE_CLICKS',
  BUSINESS_BOOKINGS: 'BUSINESS_BOOKINGS',
  BUSINESS_FOOD_ORDERS: 'BUSINESS_FOOD_ORDERS',
};

export const GoogleLocationStatisticsDateValueSequenceNameStrict = {
  BUSINESS_IMPRESSIONS_DESKTOP_MAPS: 'BUSINESS_IMPRESSIONS_DESKTOP_MAPS',
  BUSINESS_IMPRESSIONS_DESKTOP_SEARCH: 'BUSINESS_IMPRESSIONS_DESKTOP_SEARCH',
  BUSINESS_IMPRESSIONS_MOBILE_MAPS: 'BUSINESS_IMPRESSIONS_MOBILE_MAPS',
  BUSINESS_IMPRESSIONS_MOBILE_SEARCH: 'BUSINESS_IMPRESSIONS_MOBILE_SEARCH',
  BUSINESS_CONVERSATIONS: 'BUSINESS_CONVERSATIONS',
  BUSINESS_DIRECTION_REQUESTS: 'BUSINESS_DIRECTION_REQUESTS',
  CALL_CLICKS: 'CALL_CLICKS',
  WEBSITE_CLICKS: 'WEBSITE_CLICKS',
  BUSINESS_BOOKINGS: 'BUSINESS_BOOKINGS',
  BUSINESS_FOOD_ORDERS: 'BUSINESS_FOOD_ORDERS',
} as const;

export const GoogleLocationStatisticsDateValueSequenceObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Statistics_GoogleLocationStatisticsDateValueSequence:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Statistics\\GoogleLocationStatisticsDateValueSequence',
};

export const GoogleLocationStatisticsDateValueSequenceObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Statistics_GoogleLocationStatisticsDateValueSequence:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Statistics\\GoogleLocationStatisticsDateValueSequence',
} as const;

export type GoogleLocationStatisticsDateValueSequence = {
  /**
   * The name of the statistics data sequence / series
   *  Allowed Values:
   * -   `BUSINESS_IMPRESSIONS_DESKTOP_MAPS`: Business impressions on Google Maps on Desktop devices. Multiple impressions by a unique user within a single day are counted as a single impression.
   * -   `BUSINESS_IMPRESSIONS_DESKTOP_SEARCH`: Business impressions on Google Search on Desktop devices. Multiple impressions by a unique user within a single day are counted as a single impression.
   * -   `BUSINESS_IMPRESSIONS_MOBILE_MAPS`: Business impressions on Google Maps on Mobile devices. Multiple impressions by a unique user within a single day are counted as a single impression.
   * -   `BUSINESS_IMPRESSIONS_MOBILE_SEARCH`: Business impressions on Google Search on Mobile devices. Multiple impressions by a unique user within a single day are counted as a single impression.
   * -   `BUSINESS_CONVERSATIONS`: The number of message conversations received on the business profile.
   * -   `BUSINESS_DIRECTION_REQUESTS`: The number of times a direction request was requested to the business location.
   * -   `CALL_CLICKS`: The number of times the business profile call button was clicked.
   * -   `WEBSITE_CLICKS`: The number of times the business profile website was clicked.
   * -   `BUSINESS_BOOKINGS`: The number of bookings received from the business profile.
   * -   `BUSINESS_FOOD_ORDERS`: The number of food orders received from the business profile.
   *
   */
  name: (typeof GoogleLocationStatisticsDateValueSequenceName)[keyof typeof GoogleLocationStatisticsDateValueSequenceName];
  /**
   * The sum of all values
   */
  sum?: number;
  elements?: DateValue[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleLocationStatisticsDateValueSequenceObjectType)[keyof typeof GoogleLocationStatisticsDateValueSequenceObjectType];
};
