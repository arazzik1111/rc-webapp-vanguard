import { RankingsComparisons } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Rankings/Comparisons/RankingsComparisons';

export const RankingsComparisonsGroupedObjectType = {
  App_Domain_Seo_Entities_Locations_Seo_Rankings_Comparisons_RankingsComparisonsGrouped:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Rankings\\Comparisons\\RankingsComparisonsGrouped',
};

export const RankingsComparisonsGroupedObjectTypeStrict = {
  App_Domain_Seo_Entities_Locations_Seo_Rankings_Comparisons_RankingsComparisonsGrouped:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Rankings\\Comparisons\\RankingsComparisonsGrouped',
} as const;

export type RankingsComparisonsGrouped = {
  increasedOrganic?: RankingsComparisons;
  decreasedOrganic?: RankingsComparisons;
  constantOrganic?: RankingsComparisons;
  increasedMaps?: RankingsComparisons;
  decreasedMaps?: RankingsComparisons;
  constantMaps?: RankingsComparisons;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof RankingsComparisonsGroupedObjectType)[keyof typeof RankingsComparisonsGroupedObjectType];
};
