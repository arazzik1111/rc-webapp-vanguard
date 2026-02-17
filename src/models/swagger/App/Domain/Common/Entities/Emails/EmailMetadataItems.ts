import { EmailMetadataItem } from '@models/swagger/App/Domain/Common/Entities/Emails/EmailMetadataItem';

export const EmailMetadataItemsObjectType = {
  App_Domain_Common_Entities_Emails_EmailMetadataItems: 'App\\Domain\\Common\\Entities\\Emails\\EmailMetadataItems',
};

export const EmailMetadataItemsObjectTypeStrict = {
  App_Domain_Common_Entities_Emails_EmailMetadataItems: 'App\\Domain\\Common\\Entities\\Emails\\EmailMetadataItems',
} as const;

export type EmailMetadataItems = {
  elements?: EmailMetadataItem[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof EmailMetadataItemsObjectType)[keyof typeof EmailMetadataItemsObjectType];
};
