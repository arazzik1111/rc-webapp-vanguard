export const ProjectRightsSettingObjectType = {
  App_Domain_Product_Entities_Projects_ProjectRightsSetting:
    'App\\Domain\\Product\\Entities\\Projects\\ProjectRightsSetting',
};

export const ProjectRightsSettingObjectTypeStrict = {
  App_Domain_Product_Entities_Projects_ProjectRightsSetting:
    'App\\Domain\\Product\\Entities\\Projects\\ProjectRightsSetting',
} as const;

export type ProjectRightsSetting = {
  /**
   * can delete current project
   */
  delete?: boolean;
  /**
   * normal users can modify a project, viewer accounts have no possibility to update project
   */
  update?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProjectRightsSettingObjectType)[keyof typeof ProjectRightsSettingObjectType];
};
