import { EmailHeader } from '@models/swagger/App/Domain/Common/Entities/Emails/EmailHeader';

export const EmailHeadersObjectType = {
  App_Domain_Common_Entities_Emails_EmailHeaders: 'App\\Domain\\Common\\Entities\\Emails\\EmailHeaders',
};

export const EmailHeadersObjectTypeStrict = {
  App_Domain_Common_Entities_Emails_EmailHeaders: 'App\\Domain\\Common\\Entities\\Emails\\EmailHeaders',
} as const;

export type EmailHeaders = {
  elements?: EmailHeader[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof EmailHeadersObjectType)[keyof typeof EmailHeadersObjectType];
};
