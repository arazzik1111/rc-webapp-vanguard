import { VerificationMediaItem } from '@models/swagger/App/Domain/Common/Entities/Company/CompanyVerification/MediaItems/VerificationMediaItem';

export const VerificationMediaItemsObjectType = {
  App_Domain_Common_Entities_Company_CompanyVerification_MediaItems_VerificationMediaItems:
    'App\\Domain\\Common\\Entities\\Company\\CompanyVerification\\MediaItems\\VerificationMediaItems',
};

export const VerificationMediaItemsObjectTypeStrict = {
  App_Domain_Common_Entities_Company_CompanyVerification_MediaItems_VerificationMediaItems:
    'App\\Domain\\Common\\Entities\\Company\\CompanyVerification\\MediaItems\\VerificationMediaItems',
} as const;

export type VerificationMediaItems = {
  elements?: VerificationMediaItem[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof VerificationMediaItemsObjectType)[keyof typeof VerificationMediaItemsObjectType];
};
