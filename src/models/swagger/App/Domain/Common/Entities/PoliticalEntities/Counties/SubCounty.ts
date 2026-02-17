export const SubCountyObjectType = {
  App_Domain_Common_Entities_PoliticalEntities_Counties_SubCounty:
    'App\\Domain\\Common\\Entities\\PoliticalEntities\\Counties\\SubCounty',
};

export const SubCountyObjectTypeStrict = {
  App_Domain_Common_Entities_PoliticalEntities_Counties_SubCounty:
    'App\\Domain\\Common\\Entities\\PoliticalEntities\\Counties\\SubCounty',
} as const;

export type SubCounty = {
  /**
   * The SubCounties full name
   */
  name?: string;
  /**
   * The short name of the SubCounty
   */
  shortCode?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SubCountyObjectType)[keyof typeof SubCountyObjectType];
};
