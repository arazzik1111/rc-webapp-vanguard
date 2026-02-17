export const QRCodeSettingsType = {
  svg: 'svg',
  png: 'png',
  terminal: 'terminal',
};

export const QRCodeSettingsTypeStrict = {
  svg: 'svg',
  png: 'png',
  terminal: 'terminal',
} as const;

export const QRCodeSettingsErrorCorrectionLevel = {
  L: 'L',
  M: 'M',
  Q: 'Q',
  H: 'H',
};

export const QRCodeSettingsErrorCorrectionLevelStrict = {
  L: 'L',
  M: 'M',
  Q: 'Q',
  H: 'H',
} as const;

export const QRCodeSettingsObjectType = {
  App_Domain_Common_Entities_Settings_QRCodeSettings: 'App\\Domain\\Common\\Entities\\Settings\\QRCodeSettings',
};

export const QRCodeSettingsObjectTypeStrict = {
  App_Domain_Common_Entities_Settings_QRCodeSettings: 'App\\Domain\\Common\\Entities\\Settings\\QRCodeSettings',
} as const;

export type QRCodeSettings = {
  /**
   *
   *  Allowed Values:
   * -   `svg`: SVG type of the QR Code
   * -   `png`: PNG type of the QR Code
   * -   `terminal`: Terminal type of the QR Code
   *
   */
  type?: (typeof QRCodeSettingsType)[keyof typeof QRCodeSettingsType];
  version?: number;
  /**
   *
   *  Allowed Values:
   * -   `L`: Error resistance 7%
   * -   `M`: Error resistance 15%
   * -   `Q`: Error resistance 25%
   * -   `H`: Error resistance 30%
   *
   */
  errorCorrectionLevel?: (typeof QRCodeSettingsErrorCorrectionLevel)[keyof typeof QRCodeSettingsErrorCorrectionLevel];
  maskPattern?: number;
  margin?: number;
  scale?: number;
  width?: number;
  matrix?: string;
  background?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof QRCodeSettingsObjectType)[keyof typeof QRCodeSettingsObjectType];
};
