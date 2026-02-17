import { VerificationMediaItem } from '@models/swagger/App/Domain/Common/Entities/Company/CompanyVerification/MediaItems/VerificationMediaItem';

export const OwnerVerificationDocumentObjectType = {
  App_Domain_Common_Entities_Company_CompanyVerification_MediaItems_OwnerVerificationDocument:
    'App\\Domain\\Common\\Entities\\Company\\CompanyVerification\\MediaItems\\OwnerVerificationDocument',
};

export const OwnerVerificationDocumentObjectTypeStrict = {
  App_Domain_Common_Entities_Company_CompanyVerification_MediaItems_OwnerVerificationDocument:
    'App\\Domain\\Common\\Entities\\Company\\CompanyVerification\\MediaItems\\OwnerVerificationDocument',
} as const;

export type OwnerVerificationDocument = {
  front?: VerificationMediaItem;
  back?: VerificationMediaItem;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof OwnerVerificationDocumentObjectType)[keyof typeof OwnerVerificationDocumentObjectType];
};
