export const RadarSettingObjectType = {
  App_Domain_Radar_Entities_Settings_RadarSetting: 'App\\Domain\\Radar\\Entities\\Settings\\RadarSetting',
};

export const RadarSettingObjectTypeStrict = {
  App_Domain_Radar_Entities_Settings_RadarSetting: 'App\\Domain\\Radar\\Entities\\Settings\\RadarSetting',
} as const;

export type RadarSetting = {
  /**
   * if true, users will receive email notifications for feed items
   */
  sendNotifications?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof RadarSettingObjectType)[keyof typeof RadarSettingObjectType];
};
