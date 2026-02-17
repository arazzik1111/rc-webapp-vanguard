export const AISocialMediaContentSettingsObjectType = {
  App_Domain_AI_Entities_Settings_AIEngagementSettings_AISocialMediaContentSettings:
    'App\\Domain\\AI\\Entities\\Settings\\AIEngagementSettings\\AISocialMediaContentSettings',
};

export const AISocialMediaContentSettingsObjectTypeStrict = {
  App_Domain_AI_Entities_Settings_AIEngagementSettings_AISocialMediaContentSettings:
    'App\\Domain\\AI\\Entities\\Settings\\AIEngagementSettings\\AISocialMediaContentSettings',
} as const;

export type AISocialMediaContentSettings = {
  /**
   * Custom instructions or preferences for the AI to create text for social media posts or events.
   * e.g. use an upbeat, friendly tone, keep post under 150 words, include a call to action etc.
   */
  customPostContentInstructions?: string;
  /**
   * Custom instructions or preferences for the AI to generate reply on comments
   * e.g. respond with a positive, friendly tone, keep replies under 150 words, acknowledge the commenter's point etc.
   */
  customCommentContentInstructions?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AISocialMediaContentSettingsObjectType)[keyof typeof AISocialMediaContentSettingsObjectType];
};
