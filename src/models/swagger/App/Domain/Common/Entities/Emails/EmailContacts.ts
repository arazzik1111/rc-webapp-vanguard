import { EmailContact } from '@models/swagger/App/Domain/Common/Entities/Emails/EmailContact';

export const EmailContactsObjectType = {
  App_Domain_Common_Entities_Emails_EmailContacts: 'App\\Domain\\Common\\Entities\\Emails\\EmailContacts',
};

export const EmailContactsObjectTypeStrict = {
  App_Domain_Common_Entities_Emails_EmailContacts: 'App\\Domain\\Common\\Entities\\Emails\\EmailContacts',
} as const;

export type EmailContacts = {
  elements?: EmailContact[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof EmailContactsObjectType)[keyof typeof EmailContactsObjectType];
};
