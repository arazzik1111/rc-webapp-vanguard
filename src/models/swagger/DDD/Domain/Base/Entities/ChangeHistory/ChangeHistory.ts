export const ChangeHistoryObjectType = {
  DDD_Domain_Base_Entities_ChangeHistory_ChangeHistory: 'DDD\\Domain\\Base\\Entities\\ChangeHistory\\ChangeHistory',
};

export const ChangeHistoryObjectTypeStrict = {
  DDD_Domain_Base_Entities_ChangeHistory_ChangeHistory: 'DDD\\Domain\\Base\\Entities\\ChangeHistory\\ChangeHistory',
} as const;

export type ChangeHistory = {
  createdTime?: string;
  modifiedTime?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ChangeHistoryObjectType)[keyof typeof ChangeHistoryObjectType];
};
