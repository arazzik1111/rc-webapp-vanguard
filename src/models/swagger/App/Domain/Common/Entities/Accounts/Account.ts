import { AccountAICosts } from '@models/swagger/App/Domain/AI/Entities/Models/Accounts/AICosts/AccountAICosts';
import { PostalAddress } from '@models/swagger/App/Domain/Common/Entities/Address/PostalAddress';
import { Company } from '@models/swagger/App/Domain/Common/Entities/Company/Company';
import { ContactInfos } from '@models/swagger/App/Domain/Common/Entities/ContactInfos/ContactInfos';
import { Locale } from '@models/swagger/App/Domain/Common/Entities/Locales/Locale';
import { Person } from '@models/swagger/App/Domain/Common/Entities/Persons/Person';
import { Country } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/Countries/Country';
import { Projects } from '@models/swagger/App/Domain/Common/Entities/Projects/Projects';
import { Affiliate } from '@models/swagger/App/Domain/Partner/Entities/Affiliates/Affiliate';
import { ApiAccount } from '@models/swagger/App/Domain/Partner/Entities/ApiAccounts/ApiAccount';
import { Reseller } from '@models/swagger/App/Domain/Partner/Entities/Resellers/Reseller';
import { AccountSettings } from '@models/swagger/App/Domain/Product/Entities/Accounts/AccountSettings';
import { ProductRatePlanFeatures } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/Features/ProductRatePlanFeatures';
import { Subscriptions } from '@models/swagger/App/Domain/Product/Entities/Subscriptions/Subscriptions';
import { SetupSequenceCompletions } from '@models/swagger/App/Domain/Setup/Entities/SetupSequences/SetupSequenceCompletions/SetupSequenceCompletions';
import { Roles } from '@models/swagger/DDD/Domain/Common/Entities/Roles/Roles';

export const AccountStatus = {
  new: 'new',
  active: 'active',
  inactive: 'inactive',
  cancelled: 'cancelled',
  locked: 'locked',
  expired: 'expired',
  gdpr_deleted: 'gdpr_deleted',
};

export const AccountStatusStrict = {
  new: 'new',
  active: 'active',
  inactive: 'inactive',
  cancelled: 'cancelled',
  locked: 'locked',
  expired: 'expired',
  gdpr_deleted: 'gdpr_deleted',
} as const;

export const AccountType = {
  standard: 'standard',
  agency_viewer: 'agency_viewer',
  reseller: 'reseller',
};

export const AccountTypeStrict = {
  standard: 'standard',
  agency_viewer: 'agency_viewer',
  reseller: 'reseller',
} as const;

export const AccountObjectType = {
  App_Domain_Common_Entities_Accounts_Account: 'App\\Domain\\Common\\Entities\\Accounts\\Account',
};

export const AccountObjectTypeStrict = {
  App_Domain_Common_Entities_Accounts_Account: 'App\\Domain\\Common\\Entities\\Accounts\\Account',
} as const;

export type Account = {
  /**
   * Account's status
   *  Allowed Values:
   * -   `new`
   * -   `active`
   * -   `inactive`
   * -   `cancelled`
   * -   `locked`
   * -   `expired`
   * -   `gdpr_deleted`
   *
   */
  status?: (typeof AccountStatus)[keyof typeof AccountStatus];
  owner?: Person;
  invoiceCountry?: Country;
  /**
   * Account's invoice country
   */
  invoiceCountryId?: number;
  /**
   * Account's resellerId
   */
  resellerId?: number;
  reseller?: Reseller;
  affiliate?: Affiliate;
  /**
   * Account's apiAccountId
   */
  apiAccountId?: number;
  apiAccount?: ApiAccount;
  /**
   * Account's parentAccountId, if set, this is a subAccount
   */
  parentAccountId?: number;
  /**
   * Whether account is using sandbox or not
   */
  isSandboxAccount?: boolean;
  /**
   * Whether account is special or not
   */
  isSpecialAccount?: boolean;
  parentAccount?: Account;
  /**
   * Account's type
   *  Allowed Values:
   * -   `standard`: Standard account
   * -   `agency_viewer`: Agency account that can only view reports without rights to operate or change the location
   * -   `reseller`: Resellers main account that connection to api account and can manage all his reseller accounts
   *
   */
  type?: (typeof AccountType)[keyof typeof AccountType];
  projects?: Projects;
  roles?: Roles;
  contactInfos?: ContactInfos;
  billingCompany?: Company;
  billingAddress?: PostalAddress;
  settings?: AccountSettings;
  /**
   * Account's language code
   */
  languageCode?: string;
  locale?: Locale;
  features?: ProductRatePlanFeatures;
  subscriptions?: Subscriptions;
  setupSequenceCompletions?: SetupSequenceCompletions;
  aiCosts?: AccountAICosts;
  /**
   * Number of active Projects
   */
  totalNumberOfActiveProjects?: number;
  /**
   * Account's email
   */
  email?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AccountObjectType)[keyof typeof AccountObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
