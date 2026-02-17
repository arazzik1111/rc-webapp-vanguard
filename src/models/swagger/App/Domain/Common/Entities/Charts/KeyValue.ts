export const KeyValueObjectType = {
  App_Domain_Common_Entities_Charts_KeyValue: 'App\\Domain\\Common\\Entities\\Charts\\KeyValue',
};

export type KeyValue = {
  value?: number;
  key?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof KeyValueObjectType)[keyof typeof KeyValueObjectType];
};
