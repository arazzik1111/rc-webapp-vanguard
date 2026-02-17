import { QRCodeSettings } from '@models/swagger/App/Domain/Common/Entities/Settings/QRCodeSettings';

export const QRCodeObjectType = {
  App_Domain_Common_Entities_QRCode_QRCode: 'App\\Domain\\Common\\Entities\\QRCode\\QRCode',
};

export const QRCodeObjectTypeStrict = {
  App_Domain_Common_Entities_QRCode_QRCode: 'App\\Domain\\Common\\Entities\\QRCode\\QRCode',
} as const;

export type QRCode = {
  qrCodeContent?: string;
  text?: string;
  settings?: QRCodeSettings;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof QRCodeObjectType)[keyof typeof QRCodeObjectType];
};
