export const KeywordObjectType = {
  App_Domain_Common_Entities_Keywords_Keyword: 'App\\Domain\\Common\\Entities\\Keywords\\Keyword',
};

export const KeywordObjectTypeStrict = {
  App_Domain_Common_Entities_Keywords_Keyword: 'App\\Domain\\Common\\Entities\\Keywords\\Keyword',
} as const;

export type Keyword = {
  /**
   * The alias for the keyword
   */
  alias?: string;
  /**
   * The hashed value of the keyword name
   */
  hash?: string;
  /**
   * The keyword name
   */
  name?: string;
  /**
   * For keywords statistics
   */
  statisticsValue?: number;
  /**
   * For keywords statistics
   */
  statisticsThreshold?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof KeywordObjectType)[keyof typeof KeywordObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
