export const EntityObjectType = {
  DDD_Domain_Base_Entities_Entity: 'DDD\\Domain\\Base\\Entities\\Entity',
};

export const EntityObjectTypeStrict = {
  DDD_Domain_Base_Entities_Entity: 'DDD\\Domain\\Base\\Entities\\Entity',
} as const;

export type Entity = {
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof EntityObjectType)[keyof typeof EntityObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
