export const PrintTemplateSettingsPaperSize = {
  A4: 'A4',
  LETTER: 'LETTER',
};

export const PrintTemplateSettingsPaperSizeStrict = {
  A4: 'A4',
  LETTER: 'LETTER',
} as const;

export const PrintTemplateSettingsObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_Settings_PrintTemplateSettings:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\Settings\\PrintTemplateSettings',
};

export const PrintTemplateSettingsObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_Settings_PrintTemplateSettings:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\Settings\\PrintTemplateSettings',
} as const;

export type PrintTemplateSettings = {
  /**
   * Whether to include the Template Number in the Print Material
   */
  includeTemplateNo?: boolean;
  /**
   * The width for graphic in px
   */
  graphicWidth?: number;
  /**
   * The height for graphic in px
   */
  graphicHeight?: number;
  /**
   * The width of QRCode graphic (used in print template) in px
   */
  qrCodeSize?: number;
  /**
   * The paper size for Print Material
   *  Allowed Values:
   * -   `A4`: The default paper size for Print Material
   * -   `LETTER`: Letter paper size for Print Material
   *
   */
  paperSize?: (typeof PrintTemplateSettingsPaperSize)[keyof typeof PrintTemplateSettingsPaperSize];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PrintTemplateSettingsObjectType)[keyof typeof PrintTemplateSettingsObjectType];
};
