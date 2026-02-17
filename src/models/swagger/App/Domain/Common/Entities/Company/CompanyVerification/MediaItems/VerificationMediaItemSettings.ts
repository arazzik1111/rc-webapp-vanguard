export const VerificationMediaItemSettingsSubjectScope = {
  BUSINESS: 'BUSINESS',
  OWNER: 'OWNER',
};

export const VerificationMediaItemSettingsSubjectScopeStrict = {
  BUSINESS: 'BUSINESS',
  OWNER: 'OWNER',
} as const;

export const VerificationMediaItemSettingsDocumentSide = {
  FRONT: 'FRONT',
  BACK: 'BACK',
  ADDITIONAL: 'ADDITIONAL',
};

export const VerificationMediaItemSettingsDocumentSideStrict = {
  FRONT: 'FRONT',
  BACK: 'BACK',
  ADDITIONAL: 'ADDITIONAL',
} as const;

export const VerificationMediaItemSettingsObjectType = {
  App_Domain_Common_Entities_Company_CompanyVerification_MediaItems_VerificationMediaItemSettings:
    'App\\Domain\\Common\\Entities\\Company\\CompanyVerification\\MediaItems\\VerificationMediaItemSettings',
};

export const VerificationMediaItemSettingsObjectTypeStrict = {
  App_Domain_Common_Entities_Company_CompanyVerification_MediaItems_VerificationMediaItemSettings:
    'App\\Domain\\Common\\Entities\\Company\\CompanyVerification\\MediaItems\\VerificationMediaItemSettings',
} as const;

export type VerificationMediaItemSettings = {
  /**
   *
   *  Allowed Values:
   * -   `BUSINESS`: The Identification Media Item gives details about the Business
   * -   `OWNER`: The Identification Media Item gives details about the Owner
   *
   */
  subjectScope?: (typeof VerificationMediaItemSettingsSubjectScope)[keyof typeof VerificationMediaItemSettingsSubjectScope];
  /**
   *
   *  Allowed Values:
   * -   `FRONT`: The Identification Media Item represents the front of the Identification Document
   * -   `BACK`: The Identification Media Item represents the back of the Identification Document
   * -   `ADDITIONAL`: The Identification Media Item represents an additional document
   *
   */
  documentSide?: (typeof VerificationMediaItemSettingsDocumentSide)[keyof typeof VerificationMediaItemSettingsDocumentSide];
  /**
   * The original name of the document
   */
  documentOriginalName?: string;
  /**
   * The document's file format
   */
  fileMimeType?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof VerificationMediaItemSettingsObjectType)[keyof typeof VerificationMediaItemSettingsObjectType];
};
