export const SMSTemplateSettingsObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_Settings_SMSTemplateSettings:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\Settings\\SMSTemplateSettings',
};

export const SMSTemplateSettingsObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_Settings_SMSTemplateSettings:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\Settings\\SMSTemplateSettings',
} as const;

export type SMSTemplateSettings = {
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SMSTemplateSettingsObjectType)[keyof typeof SMSTemplateSettingsObjectType];
};
