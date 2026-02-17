import { TargetLocations } from '@models/swagger/App/Domain/Ads/Entities/Settings/TargetLocations';

export const GoogleAdAccountSettingsStatus = {
  PAUSED: 'PAUSED',
  ENABLED: 'ENABLED',
  CREATING: 'CREATING',
  SUSPENDED: 'SUSPENDED',
  SYNCHRONIZING_BUDGET_TO_ZUORA: 'SYNCHRONIZING_BUDGET_TO_ZUORA',
  SYNCHRONISING: 'SYNCHRONISING',
  BUDGET_SYNCHRONIZED_SUCCESSFULLY_TO_ZUORA: 'BUDGET_SYNCHRONIZED_SUCCESSFULLY_TO_ZUORA',
  ERROR_ON_CREATING: 'ERROR_ON_CREATING',
  ERROR_ON_SYNCHRONISING: 'ERROR_ON_SYNCHRONISING',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  LOCKED: 'LOCKED',
  PENDING_ACTIVATION: 'PENDING_ACTIVATION',
};

export const GoogleAdAccountSettingsStatusStrict = {
  PAUSED: 'PAUSED',
  ENABLED: 'ENABLED',
  CREATING: 'CREATING',
  SUSPENDED: 'SUSPENDED',
  SYNCHRONIZING_BUDGET_TO_ZUORA: 'SYNCHRONIZING_BUDGET_TO_ZUORA',
  SYNCHRONISING: 'SYNCHRONISING',
  BUDGET_SYNCHRONIZED_SUCCESSFULLY_TO_ZUORA: 'BUDGET_SYNCHRONIZED_SUCCESSFULLY_TO_ZUORA',
  ERROR_ON_CREATING: 'ERROR_ON_CREATING',
  ERROR_ON_SYNCHRONISING: 'ERROR_ON_SYNCHRONISING',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  LOCKED: 'LOCKED',
  PENDING_ACTIVATION: 'PENDING_ACTIVATION',
} as const;

export const GoogleAdAccountSettingsObjectType = {
  App_Domain_Ads_Entities_Google_GoogleAdAccountSettings: 'App\\Domain\\Ads\\Entities\\Google\\GoogleAdAccountSettings',
};

export const GoogleAdAccountSettingsObjectTypeStrict = {
  App_Domain_Ads_Entities_Google_GoogleAdAccountSettings: 'App\\Domain\\Ads\\Entities\\Google\\GoogleAdAccountSettings',
} as const;

export type GoogleAdAccountSettings = {
  /**
   * The status of the AdAccount
   *  Allowed Values:
   * -   `PAUSED`: The status of the AdAccount
   * -   `ENABLED`: The status of the AdAccount
   * -   `CREATING`: The status of the AdAccount
   * -   `SUSPENDED`: The status of the AdAccount
   * -   `SYNCHRONIZING_BUDGET_TO_ZUORA`: The status of the AdAccount
   * -   `SYNCHRONISING`: The status of the AdAccount
   * -   `BUDGET_SYNCHRONIZED_SUCCESSFULLY_TO_ZUORA`: The status of the AdAccount
   * -   `ERROR_ON_CREATING`: The status of the AdAccount
   * -   `ERROR_ON_SYNCHRONISING`: The status of the AdAccount
   * -   `SYNCHRONISING`: The status of the AdAccount
   * -   `INTERNAL_ERROR`: The status of the AdAccount
   * -   `LOCKED`: The status of the AdAccount
   * -   `PENDING_ACTIVATION`: The status of the AdAccount
   *
   */
  status?: (typeof GoogleAdAccountSettingsStatus)[keyof typeof GoogleAdAccountSettingsStatus];
  /**
   * Whether it was initially synced or not
   */
  initiallySynced?: boolean;
  /**
   * Whether it is synced or not
   */
  synced?: boolean;
  /**
   * The ID of the AdAccount as it is saved in Google Ads dashboard
   */
  externalId?: number;
  /**
   * MCC of the AdAccount
   */
  mcc?: string;
  targetLocations?: TargetLocations;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleAdAccountSettingsObjectType)[keyof typeof GoogleAdAccountSettingsObjectType];
};
