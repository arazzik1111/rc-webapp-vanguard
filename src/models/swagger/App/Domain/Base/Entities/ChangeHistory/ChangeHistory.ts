export const ChangeHistoryObjectType = {
  App_Domain_Base_Entities_ChangeHistory_ChangeHistory: 'App\\Domain\\Base\\Entities\\ChangeHistory\\ChangeHistory',
};

export type ChangeHistory = {
  createdTime?: string;
  modifiedTime?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ChangeHistoryObjectType)[keyof typeof ChangeHistoryObjectType];
};
