export const RadarFeedFeatureFlagSettingObjectType = {
  App_Domain_Radar_Entities_FeatureFlags_RadarFeedFeatureFlagSetting:
    'App\\Domain\\Radar\\Entities\\FeatureFlags\\RadarFeedFeatureFlagSetting',
};

export const RadarFeedFeatureFlagSettingObjectTypeStrict = {
  App_Domain_Radar_Entities_FeatureFlags_RadarFeedFeatureFlagSetting:
    'App\\Domain\\Radar\\Entities\\FeatureFlags\\RadarFeedFeatureFlagSetting',
} as const;

export type RadarFeedFeatureFlagSetting = {
  /**
   * if true, users will receive email notifications for feed items
   */
  sendNotifications?: boolean;
  /**
   * the email from which emails are sent
   */
  senderEmail?: string;
  /**
   * the name from which emails are sent
   */
  senderName?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof RadarFeedFeatureFlagSettingObjectType)[keyof typeof RadarFeedFeatureFlagSettingObjectType];
};
