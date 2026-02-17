export const CountyObjectType = {
  App_Domain_Common_Entities_PoliticalEntities_Counties_County:
    'App\\Domain\\Common\\Entities\\PoliticalEntities\\Counties\\County',
};

export const CountyObjectTypeStrict = {
  App_Domain_Common_Entities_PoliticalEntities_Counties_County:
    'App\\Domain\\Common\\Entities\\PoliticalEntities\\Counties\\County',
} as const;

export type County = {
  /**
   * The Counties full name
   */
  name?: string;
  /**
   * The short name of the state
   * for Città Metropolitana di Napoli
   */
  shortCode?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof CountyObjectType)[keyof typeof CountyObjectType];
};
