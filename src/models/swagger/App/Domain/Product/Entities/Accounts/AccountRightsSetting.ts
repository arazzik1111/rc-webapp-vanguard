export const AccountRightsSettingObjectType = {
  App_Domain_Product_Entities_Accounts_AccountRightsSetting:
    'App\\Domain\\Product\\Entities\\Accounts\\AccountRightsSetting',
};

export const AccountRightsSettingObjectTypeStrict = {
  App_Domain_Product_Entities_Accounts_AccountRightsSetting:
    'App\\Domain\\Product\\Entities\\Accounts\\AccountRightsSetting',
} as const;

export type AccountRightsSetting = {
  /**
   * Has access to agency settings
   */
  manageAgencySettings?: boolean;
  /**
   * Can manage projects, create new ones and delete them
   */
  manageProjects?: boolean;
  /**
   * Can manage subaccounts, create new ones and delete them
   */
  manageSubAccounts?: boolean;
  /**
   * Can change payment settings, upgrade or cancel the account
   */
  manageSubscriptionsSettings?: boolean;
  /**
   * Can access time tracking Administration
   */
  timeTrackingAdminsitration?: boolean;
  /**
   * Can access own projects
   */
  accessOwnProjects?: boolean;
  /**
   * Can access all projects from main account
   */
  accessAllProjectsFromMainAccount?: boolean;
  /**
   * Accounts of type viewer are not allowed to make changes to projects
   */
  manageCurrentProject?: boolean;
  /**
   * Is allowed to manage ads campaigns, launch campaigns, edit budget
   */
  manageAds?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AccountRightsSettingObjectType)[keyof typeof AccountRightsSettingObjectType];
};
