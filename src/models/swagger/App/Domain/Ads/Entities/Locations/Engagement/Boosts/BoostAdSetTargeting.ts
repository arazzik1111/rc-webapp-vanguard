import { BoostAdSetTargetingCities } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdSetTargetingCities';
import { BoostAdSetTargetingCountries } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdSetTargetingCountries';
import { BoostAdSetTargetingCountryGroups } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdSetTargetingCountryGroups';
import { BoostAdSetTargetingCustomLocations } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdSetTargetingCustomLocations';
import { BoostAdSetTargetingPlaces } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdSetTargetingPlaces';
import { BoostAdSetTargetingPublisherPlatforms } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdSetTargetingPublisherPlatforms';
import { BoostAdSetTargetingRegions } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdSetTargetingRegions';
import { BoostAdSetTargetingZips } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdSetTargetingZips';

export const BoostAdSetTargetingGenders = {
  a: 'a',
  m: 'm',
  f: 'f',
};

export const BoostAdSetTargetingGendersStrict = {
  a: 'a',
  m: 'm',
  f: 'f',
} as const;

export const BoostAdSetTargetingObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostAdSetTargeting:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostAdSetTargeting',
};

export const BoostAdSetTargetingObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostAdSetTargeting:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostAdSetTargeting',
} as const;

export type BoostAdSetTargeting = {
  /**
   * The minimum age of the target audience
   */
  ageMin?: number;
  /**
   * The maximum age of the target audience
   */
  ageMax?: number;
  /**
   * The external Id of the targeting
   */
  externalId?: string | number;
  /**
   * The type of audience
   */
  audienceType?: string;
  countries?: BoostAdSetTargetingCountries;
  regions?: BoostAdSetTargetingRegions;
  cities?: BoostAdSetTargetingCities;
  customLocation?: BoostAdSetTargetingCustomLocations;
  zips?: BoostAdSetTargetingZips;
  places?: BoostAdSetTargetingPlaces;
  countryGroups?: BoostAdSetTargetingCountryGroups;
  /**
   * The gender which the ad set is targeting
   *  Allowed Values:
   * -   `a`
   * -   `m`
   * -   `f`
   *
   */
  genders?: (typeof BoostAdSetTargetingGenders)[keyof typeof BoostAdSetTargetingGenders];
  publisherPlatforms?: BoostAdSetTargetingPublisherPlatforms;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetTargetingObjectType)[keyof typeof BoostAdSetTargetingObjectType];
};
