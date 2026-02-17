import { Country } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/Countries/Country';
import { ApiAccount } from '@models/swagger/App/Domain/Partner/Entities/ApiAccounts/ApiAccount';
import { Reseller } from '@models/swagger/App/Domain/Partner/Entities/Resellers/Reseller';
import { ProductRatePlanFeatureFlags } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/FeatureFlags/ProductRatePlanFeatureFlags';
import { ProductRatePlanFeatureFlagsBundles } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/FeatureFlagsBundles/ProductRatePlanFeatureFlagsBundles';
import { ProductRatePlanFeatures } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/Features/ProductRatePlanFeatures';
import { ProductRatePlans } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/ProductRatePlans';
import { ProductRatePlanSettings } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/ProductRatePlanSettings';
import { ProductRatePlanProducts } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/Products/ProductRatePlanProducts';
import { ProductRatePlanUpgrades } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/Upgrades/ProductRatePlanUpgrades';
import { FeatureFlags } from '@models/swagger/App/Domain/Product/Entities/Products/FeatureFlags/FeatureFlags';

export const ProductRatePlanPaymentHandling = {
  partner: 'partner',
  zuora: 'zuora',
};

export const ProductRatePlanPaymentHandlingStrict = {
  partner: 'partner',
  zuora: 'zuora',
} as const;

export const ProductRatePlanBillingPeriod = {
  monthly: 'monthly',
  annual: 'annual',
  quarterly: 'quarterly',
  semiannual: 'semiannual',
};

export const ProductRatePlanBillingPeriodStrict = {
  monthly: 'monthly',
  annual: 'annual',
  quarterly: 'quarterly',
  semiannual: 'semiannual',
} as const;

export const ProductRatePlanObjectType = {
  App_Domain_Product_Entities_ProductRatePlans_ProductRatePlan:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\ProductRatePlan',
};

export const ProductRatePlanObjectTypeStrict = {
  App_Domain_Product_Entities_ProductRatePlans_ProductRatePlan:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\ProductRatePlan',
} as const;

export type ProductRatePlan = {
  /**
   * The Product RatePlan's name
   */
  name?: string;
  /**
   * This field is used for detail naming, e.g. "basic", "plus", etc.
   */
  nameSuffix?: string;
  /**
   * Defines the visible name of the product if no translation is present for the name
   */
  defaultTranslation?: string;
  /**
   * The ID of the ProductGroup
   */
  productGroupId?: number;
  /**
   * The ID of the API user
   */
  apiUserId?: number;
  apiUser?: ApiAccount;
  /**
   * The id of the reseller
   */
  resellerId?: number;
  reseller?: Reseller;
  /**
   * The id of the country
   */
  defaultCountryId?: number;
  defaultCountry?: Country;
  /**
   * The default Language for the rate plan, e.g. de
   */
  defaultLanguage?: string;
  /**
   * Whether the product is a default product or not
   */
  isDefaultProduct?: boolean;
  /**
   * Whether the product is active or not
   */
  isActive?: boolean;
  /**
   * defines if product is onl y
   */
  isTestProduct?: boolean;
  /**
   * The priority of the rate plan
   */
  priority?: number;
  /**
   * Wheather this is an agency enabled RatePlan or not
   */
  isAgencyRatePlan?: boolean;
  /**
   * The amount of included projects for this product
   */
  projectsIncluded?: number;
  /**
   * Ads budget incldued in package based ads model
   */
  adsBudgetIncluded?: number;
  /**
   * The value of the initial sum
   */
  sumInitial?: number;
  /**
   * The value of the initial sum including VAT
   */
  sumInitialInclVat?: number;
  /**
   * The value of the recurring sum
   */
  sumRecurring?: number;
  /**
   * The value of the recurring sum including VAT
   */
  sumRecurringInclVat?: number;
  /**
   * Whether sum including vat to be displayed or not
   */
  showSumInclVat?: boolean;
  /**
   * The currency
   */
  currency?: string;
  /**
   * The payment handling
   *  Allowed Values:
   * -   `partner`
   * -   `zuora`
   *
   */
  paymentHandling?: (typeof ProductRatePlanPaymentHandling)[keyof typeof ProductRatePlanPaymentHandling];
  /**
   * the share that we gain from this ProductRatePlan in a revenue share model
   */
  revenueShareRatio?: number;
  /**
   * One of 'monthly','annual','quarterly','semiannual'
   *  Allowed Values:
   * -   `monthly`
   * -   `annual`
   * -   `quarterly`
   * -   `semiannual`
   *
   */
  billingPeriod?: (typeof ProductRatePlanBillingPeriod)[keyof typeof ProductRatePlanBillingPeriod];
  /**
   * Initial duration of first term in months
   */
  durationInitial?: number;
  /**
   * Duration of recurring term in months
   */
  durationRecurring?: number;
  /**
   * Minimum duration in months
   */
  minDuration?: number;
  /**
   * The number of days that are offered as test period
   */
  testPeriod?: number;
  /**
   * The text for the test period
   */
  testPeriodText?: string;
  /**
   * The number of days where we apply a goodwill for billing to partners.
   * If subscription is cancelled within this period, it won't be charged
   */
  goodwillPeriod?: number;
  /**
   * The number of days a customer has to cancel before renewal
   */
  cancellationNoticePeriod?: number;
  /**
   * Defines if customer can cancel this subscription
   */
  isCancellableByAccountOwner?: boolean;
  /**
   * Defines if this subscription can be booked by a customer directly
   */
  isBookableByAccountOwner?: boolean;
  /**
   * Defines if this subscription can be booked by a customer directly
   */
  isBookableByAdmin?: boolean;
  /**
   * If true, available CMS are determined by ProductRatePlan  and not by country
   */
  useCmsDefinitionsFromProductRatePlan?: boolean;
  /**
   * If true, one instance is related to one Project, e.g. in case of adcoach
   */
  isBoundToProject?: boolean;
  upgradeProductRatePlans?: ProductRatePlans;
  productRatePlanUpgrades?: ProductRatePlanUpgrades;
  features?: ProductRatePlanFeatures;
  settings?: ProductRatePlanSettings;
  productRatePlanProducts?: ProductRatePlanProducts;
  productRatePlanFeatureFlags?: ProductRatePlanFeatureFlags;
  productRatePlanFeatureFlagsBundles?: ProductRatePlanFeatureFlagsBundles;
  featureFlags?: FeatureFlags;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProductRatePlanObjectType)[keyof typeof ProductRatePlanObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
