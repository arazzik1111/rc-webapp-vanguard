export const EmailContactObjectType = {
  App_Domain_Common_Entities_Emails_EmailContact: 'App\\Domain\\Common\\Entities\\Emails\\EmailContact',
};

export const EmailContactObjectTypeStrict = {
  App_Domain_Common_Entities_Emails_EmailContact: 'App\\Domain\\Common\\Entities\\Emails\\EmailContact',
} as const;

export type EmailContact = {
  /**
   * The Name of the recipient
   */
  name?: string;
  /**
   * The email of the recipient
   */
  email?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof EmailContactObjectType)[keyof typeof EmailContactObjectType];
};
