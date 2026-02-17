import { RankingsComparison } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Rankings/Comparisons/RankingsComparison';
import { RankingsComparisonsGrouped } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Rankings/Comparisons/RankingsComparisonsGrouped';

export const RankingsComparisonsObjectType = {
  App_Domain_Seo_Entities_Locations_Seo_Rankings_Comparisons_RankingsComparisons:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Rankings\\Comparisons\\RankingsComparisons',
};

export const RankingsComparisonsObjectTypeStrict = {
  App_Domain_Seo_Entities_Locations_Seo_Rankings_Comparisons_RankingsComparisons:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Rankings\\Comparisons\\RankingsComparisons',
} as const;

export type RankingsComparisons = {
  grouped?: RankingsComparisonsGrouped;
  elements?: RankingsComparison[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof RankingsComparisonsObjectType)[keyof typeof RankingsComparisonsObjectType];
};
