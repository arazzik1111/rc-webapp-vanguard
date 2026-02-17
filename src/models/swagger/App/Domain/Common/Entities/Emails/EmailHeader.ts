export const EmailHeaderObjectType = {
  App_Domain_Common_Entities_Emails_EmailHeader: 'App\\Domain\\Common\\Entities\\Emails\\EmailHeader',
};

export const EmailHeaderObjectTypeStrict = {
  App_Domain_Common_Entities_Emails_EmailHeader: 'App\\Domain\\Common\\Entities\\Emails\\EmailHeader',
} as const;

export type EmailHeader = {
  /**
   * The Name of the Header
   */
  name?: string;
  /**
   * The Value of the Header
   */
  value?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof EmailHeaderObjectType)[keyof typeof EmailHeaderObjectType];
};
