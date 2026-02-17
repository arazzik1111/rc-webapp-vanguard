export const AgencyRightsSettingObjectType = {
  App_Domain_Agency_Entities_Settings_AgencyRightsSetting:
    'App\\Domain\\Agency\\Entities\\Settings\\AgencyRightsSetting',
};

export const AgencyRightsSettingObjectTypeStrict = {
  App_Domain_Agency_Entities_Settings_AgencyRightsSetting:
    'App\\Domain\\Agency\\Entities\\Settings\\AgencyRightsSetting',
} as const;

export type AgencyRightsSetting = {
  manageSubAccounts?: boolean;
  hasAccessToAgencyTools?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AgencyRightsSettingObjectType)[keyof typeof AgencyRightsSettingObjectType];
};
