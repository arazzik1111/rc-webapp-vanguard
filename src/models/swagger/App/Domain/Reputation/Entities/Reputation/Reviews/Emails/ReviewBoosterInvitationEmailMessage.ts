import { ProductThemeSetting } from '@models/swagger/App/Domain/Agency/Entities/Settings/ProductThemeSetting';
import { Account } from '@models/swagger/App/Domain/Common/Entities/Accounts/Account';
import { EmailContact } from '@models/swagger/App/Domain/Common/Entities/Emails/EmailContact';
import { EmailContacts } from '@models/swagger/App/Domain/Common/Entities/Emails/EmailContacts';
import { EmailHeaders } from '@models/swagger/App/Domain/Common/Entities/Emails/EmailHeaders';
import { EmailMetadataItems } from '@models/swagger/App/Domain/Common/Entities/Emails/EmailMetadataItems';
import { Project } from '@models/swagger/App/Domain/Common/Entities/Projects/Project';
import { HtmlContent } from '@models/swagger/App/Domain/Common/Entities/WebContent/HtmlContent';
import { MjmlContent } from '@models/swagger/App/Domain/Common/Entities/WebContent/MjmlContent';
import { PartnerCompanySetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerCompanySetting';
import { PartnerEmailSetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerEmailSetting';
import { PartnerProductSetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerProductSetting';
import { Location } from '@models/swagger/App/Domain/Presence/Entities/Locations/Location';
import { Exception } from '@models/swagger/DDD/Infrastructure/Exceptions/Exception';

export const ReviewBoosterInvitationEmailMessageObjectType = {
  App_Domain_Reputation_Entities_Reputation_Reviews_Emails_ReviewBoosterInvitationEmailMessage:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Reviews\\Emails\\ReviewBoosterInvitationEmailMessage',
};

export type ReviewBoosterInvitationEmailMessage = {
  /**
   * The URL for the logo image in the ReviewBoosterInvitation Email
   */
  logoImagePublicUrl?: string;
  /**
   * The URL for the header image in the ReviewBoosterInvitation Email
   */
  headerImagePublicUrl?: string;
  /**
   * The URL for the review link in the ReviewBoosterInvitation Email
   */
  viewAllReviewsURL?: string;
  location?: Location;
  project?: Project;
  account?: Account;
  partnerCompanySetting?: PartnerCompanySetting;
  productThemeSetting?: ProductThemeSetting;
  partnerEmailSetting?: PartnerEmailSetting;
  partnerProductSetting?: PartnerProductSetting;
  mjmlContent?: MjmlContent;
  htmlContent?: HtmlContent;
  from: EmailContact;
  to: EmailContacts;
  bcc?: EmailContacts;
  cc?: EmailContacts;
  headers?: EmailHeaders;
  metadata?: EmailMetadataItems;
  /**
   * Subject of the E-Mail
   */
  subject: string;
  /**
   * The Id of the type of Email used by BI for statistics
   */
  campaignId?: string;
  dispatchException?: Exception;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewBoosterInvitationEmailMessageObjectType)[keyof typeof ReviewBoosterInvitationEmailMessageObjectType];
};
