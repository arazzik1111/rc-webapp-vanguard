export const AgencySettingObjectType = {
  App_Domain_Agency_Entities_Settings_AgencySetting: 'App\\Domain\\Agency\\Entities\\Settings\\AgencySetting',
};

export type AgencySetting = {
  manageSubAccounts?: boolean;
  hasAccessToAgencyTools?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AgencySettingObjectType)[keyof typeof AgencySettingObjectType];
};
