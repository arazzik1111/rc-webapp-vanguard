import { AdAccount } from '@models/swagger/App/Domain/Ads/Entities/AdAccount';
import { BoostAdSets } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/BoostAdSets';
import { SpecialAdCategories } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/SpecialAdCategories';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const BoostCampaignStatus = {
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  DELETED: 'DELETED',
  ARCHIVED: 'ARCHIVED',
  DRAFT: 'DRAFT',
  COMPLETED: 'COMPLETED',
};

export const BoostCampaignStatusStrict = {
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  DELETED: 'DELETED',
  ARCHIVED: 'ARCHIVED',
  DRAFT: 'DRAFT',
  COMPLETED: 'COMPLETED',
} as const;

export const BoostCampaignObjective = {
  OUTCOME_APP_PROMOTION: 'OUTCOME_APP_PROMOTION',
  OUTCOME_AWARENESS: 'OUTCOME_AWARENESS',
  OUTCOME_ENGAGEMENT: 'OUTCOME_ENGAGEMENT',
  OUTCOME_LEADS: 'OUTCOME_LEADS',
  OUTCOME_SALES: 'OUTCOME_SALES',
  OUTCOME_TRAFFIC: 'OUTCOME_TRAFFIC',
  BRAND_AWARENESS: 'BRAND_AWARENESS',
  REACH: 'REACH',
  LEAD_GENERATION: 'LEAD_GENERATION',
  APP_INSTALLS: 'APP_INSTALLS',
  CONVERSIONS: 'CONVERSIONS',
  LINK_CLICKS: 'LINK_CLICKS',
  MESSAGES: 'MESSAGES',
  POST_ENGAGEMENT: 'POST_ENGAGEMENT',
  PRODUCT_CATALOG_SALES: 'PRODUCT_CATALOG_SALES',
  STORE_VISITS: 'STORE_VISITS',
  PAGE_LIKES: 'PAGE_LIKES',
  VIDEO_VIEWS: 'VIDEO_VIEWS',
};

export const BoostCampaignObjectiveStrict = {
  OUTCOME_APP_PROMOTION: 'OUTCOME_APP_PROMOTION',
  OUTCOME_AWARENESS: 'OUTCOME_AWARENESS',
  OUTCOME_ENGAGEMENT: 'OUTCOME_ENGAGEMENT',
  OUTCOME_LEADS: 'OUTCOME_LEADS',
  OUTCOME_SALES: 'OUTCOME_SALES',
  OUTCOME_TRAFFIC: 'OUTCOME_TRAFFIC',
  BRAND_AWARENESS: 'BRAND_AWARENESS',
  REACH: 'REACH',
  LEAD_GENERATION: 'LEAD_GENERATION',
  APP_INSTALLS: 'APP_INSTALLS',
  CONVERSIONS: 'CONVERSIONS',
  LINK_CLICKS: 'LINK_CLICKS',
  MESSAGES: 'MESSAGES',
  POST_ENGAGEMENT: 'POST_ENGAGEMENT',
  PRODUCT_CATALOG_SALES: 'PRODUCT_CATALOG_SALES',
  STORE_VISITS: 'STORE_VISITS',
  PAGE_LIKES: 'PAGE_LIKES',
  VIDEO_VIEWS: 'VIDEO_VIEWS',
} as const;

export const BoostCampaignObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostCampaign:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostCampaign',
};

export const BoostCampaignObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostCampaign:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostCampaign',
} as const;

export type BoostCampaign = {
  /**
   * The AdAccount ID associated to the BoostCampaign
   */
  adAccountId?: number;
  adAccount?: AdAccount;
  /**
   * Status of the Campaign
   *  Allowed Values:
   * -   `ACTIVE`: Active status - the Campaign is active and running
   * -   `PAUSED`: Paused status - all its active AdSets and Ads will be paused and have an effective status CAMPAIGN_PAUSED
   * -   `DELETED`: Deleted status - the Campaign is deleted
   * -   `ARCHIVED`: Archived status - the Campaign is archived
   * -   `DRAFT`: Draft is used for internal state. A draft status means that the Campaign is still in setup. This value should not be used at ARGUS API Calls
   * -   `COMPLETED`: Completed is used for internal state. A completed status means that the Campaign has reached its end date. This value should not be used at ARGUS API Calls
   *
   */
  status?: (typeof BoostCampaignStatus)[keyof typeof BoostCampaignStatus];
  /**
   * Objective of the Campaign
   *  Allowed Values:
   * -   `OUTCOME_APP_PROMOTION`: App Promotion objective
   * -   `OUTCOME_AWARENESS`: Outcome Awareness objective
   * -   `OUTCOME_ENGAGEMENT`: Outcome Engagement objective
   * -   `OUTCOME_LEADS`: Outcome Leads objective
   * -   `OUTCOME_SALES`: Outcome Sales objective
   * -   `OUTCOME_TRAFFIC`: Outcome Traffic objective
   * -   `BRAND_AWARENESS`
   * -   `REACH`
   * -   `LEAD_GENERATION`
   * -   `APP_INSTALLS`
   * -   `CONVERSIONS`
   * -   `LINK_CLICKS`: LInk clicks objective
   * -   `MESSAGES`
   * -   `POST_ENGAGEMENT`
   * -   `PRODUCT_CATALOG_SALES`
   * -   `STORE_VISITS`
   * -   `PAGE_LIKES`
   * -   `VIDEO_VIEWS`
   *
   */
  objective?: (typeof BoostCampaignObjective)[keyof typeof BoostCampaignObjective];
  /**
   * The external id of the campaign (in Meta)
   */
  externalId?: string;
  /**
   * The name of the BoostCampaign
   */
  name?: string;
  specialAdCategories?: SpecialAdCategories;
  /**
   * Specifies if the Boost was created externally in Meta ads Manager if true, otherwise in the RC Application
   */
  createdExternally?: boolean;
  adSets?: BoostAdSets;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostCampaignObjectType)[keyof typeof BoostCampaignObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
