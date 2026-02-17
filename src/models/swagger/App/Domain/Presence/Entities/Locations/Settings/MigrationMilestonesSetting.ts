export const MigrationMilestonesSettingObjectType = {
  App_Domain_Presence_Entities_Locations_Settings_MigrationMilestonesSetting:
    'App\\Domain\\Presence\\Entities\\Locations\\Settings\\MigrationMilestonesSetting',
};

export type MigrationMilestonesSetting = {
  locationId?: number;
  /**
   * Weather the migration has been started or not
   */
  startMigration?: boolean;
  /**
   * Weather at least one social account is connected or not
   */
  socialAccountConnected?: boolean;
  /**
   * Weather the imported posts agreement has been accepted or not
   */
  importedPostsAgreement?: boolean;
  /**
   * Weather the social migration has been finished or not
   */
  finishedSocialMigration?: boolean;
  /**
   * Weather the reviews sources were imported or not
   */
  reviewSourcesImported?: boolean;
  /**
   * Weather the contact list or not
   */
  contactListImported?: boolean;
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
  objectType: (typeof MigrationMilestonesSettingObjectType)[keyof typeof MigrationMilestonesSettingObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
