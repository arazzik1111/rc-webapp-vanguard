export const MigrationStateSettingObjectType = {
  App_Domain_Presence_Entities_Locations_Settings_MigrationStateSetting:
    'App\\Domain\\Presence\\Entities\\Locations\\Settings\\MigrationStateSetting',
};

export const MigrationStateSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Settings_MigrationStateSetting:
    'App\\Domain\\Presence\\Entities\\Locations\\Settings\\MigrationStateSetting',
} as const;

export type MigrationStateSetting = {
  locationId?: number;
  /**
   * Weather at least one social account is connected or not
   */
  listingAccountsConnected?: boolean;
  /**
   * Weather the migration has been started or not
   */
  startSocialMigration?: boolean;
  /**
   * Weather the imported posts agreement has been accepted or not
   */
  socialPostsImported?: boolean;
  /**
   * Weather the social migration has been finished or not
   */
  finishedSocialMigration?: boolean;
  /**
   * Weather the Reputation migration has been started or not
   */
  startReputationMigration?: boolean;
  /**
   * Weather the reviews sources were imported or not
   */
  reputationSourcesImported?: boolean;
  /**
   * Weather the contact list or not
   */
  reputationContactsImported?: boolean;
  /**
   * Weather the Reputation widget is present or not
   */
  hasReputationWidget?: boolean;
  /**
   * Weather the Reviews widget is present or not
   */
  hasReviewWidget?: boolean;
  /**
   * Weather the reputation migration has been finished or not
   */
  finishedReputationMigration?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof MigrationStateSettingObjectType)[keyof typeof MigrationStateSettingObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
