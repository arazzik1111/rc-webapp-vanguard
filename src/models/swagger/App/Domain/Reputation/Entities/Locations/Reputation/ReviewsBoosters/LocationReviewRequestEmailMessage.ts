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
import { EmailTemplateSettings } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewsBoosters/Settings/EmailTemplateSettings';
import { Exception } from '@models/swagger/DDD/Infrastructure/Exceptions/Exception';

export const LocationReviewRequestEmailMessageObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_LocationReviewRequestEmailMessage:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\LocationReviewRequestEmailMessage',
};

export const LocationReviewRequestEmailMessageObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_LocationReviewRequestEmailMessage:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\LocationReviewRequestEmailMessage',
} as const;

export type LocationReviewRequestEmailMessage = {
  /**
   * The placeholder for the greeting text in the email template
   */
  greetingPlaceholder?: string;
  /**
   * The placeholder for the body text in the email template
   */
  bodyPlaceholder?: string;
  /**
   * The placeholder for the closing text in the email template
   */
  closingPlaceholder?: string;
  /**
   * The URL for the logo image in the LocationReviewRequest Email
   */
  logoImagePublicUrl?: string;
  /**
   * The URL for the header image in the LocationReviewRequest Email
   */
  headerImagePublicUrl?: string;
  /**
   * The URL for the review link in the LocationReviewRequest Email
   */
  leaveReviewURL?: string;
  emailTemplateSettings?: EmailTemplateSettings;
  /**
   * Whether the email is in preview mode
   */
  isPreview?: boolean;
  /**
   * Whether the email has default template settings saved
   */
  hasDefaultTemplateSettings?: boolean;
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
  objectType: (typeof LocationReviewRequestEmailMessageObjectType)[keyof typeof LocationReviewRequestEmailMessageObjectType];
};
