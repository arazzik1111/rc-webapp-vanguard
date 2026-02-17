export const EmailMetadataItemObjectType = {
  App_Domain_Common_Entities_Emails_EmailMetadataItem: 'App\\Domain\\Common\\Entities\\Emails\\EmailMetadataItem',
};

export const EmailMetadataItemObjectTypeStrict = {
  App_Domain_Common_Entities_Emails_EmailMetadataItem: 'App\\Domain\\Common\\Entities\\Emails\\EmailMetadataItem',
} as const;

export type EmailMetadataItem = {
  /**
   * The Name of the Data
   */
  name?: string;
  /**
   * The Value of the Data
   */
  value?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof EmailMetadataItemObjectType)[keyof typeof EmailMetadataItemObjectType];
};
