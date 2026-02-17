import { BoostAds } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/BoostAds';
import { BoostAdSetTargeting } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/BoostAdSetTargeting';
import { BoostCampaign } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/BoostCampaign';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const BoostAdSetBillingEvent = {
  APP_INSTALLS: 'APP_INSTALLS',
  CLICKS: 'CLICKS',
  IMPRESSIONS: 'IMPRESSIONS',
  LINK_CLICKS: 'LINK_CLICKS',
  PURCHASE: 'PURCHASE',
  THRUPLAY: 'THRUPLAY',
  POST_ENGAGEMENT: 'POST_ENGAGEMENT',
  OFFER_CLAIMS: 'OFFER_CLAIMS',
  PAGE_LIKES: 'PAGE_LIKES',
  LISTING_INTERACTION: 'LISTING_INTERACTION',
};

export const BoostAdSetBillingEventStrict = {
  APP_INSTALLS: 'APP_INSTALLS',
  CLICKS: 'CLICKS',
  IMPRESSIONS: 'IMPRESSIONS',
  LINK_CLICKS: 'LINK_CLICKS',
  PURCHASE: 'PURCHASE',
  THRUPLAY: 'THRUPLAY',
  POST_ENGAGEMENT: 'POST_ENGAGEMENT',
  OFFER_CLAIMS: 'OFFER_CLAIMS',
  PAGE_LIKES: 'PAGE_LIKES',
  LISTING_INTERACTION: 'LISTING_INTERACTION',
} as const;

export const BoostAdSetOptimizationGoal = {
  REACH: 'REACH',
  AD_RECALL_LIFT: 'AD_RECALL_LIFT',
  CONVERSATIONS: 'CONVERSATIONS',
  CLICKS: 'CLICKS',
  APP_INSTALLS: 'APP_INSTALLS',
  APP_INSTALLS_AND_OFFSITE_CONVERSIONS: 'APP_INSTALLS_AND_OFFSITE_CONVERSIONS',
  DERIVED_EVENTS: 'DERIVED_EVENTS',
  ENGAGED_USERS: 'ENGAGED_USERS',
  EVENT_RESPONSES: 'EVENT_RESPONSES',
  IMPRESSIONS: 'IMPRESSIONS',
  LANDING_PAGE_VIEWS: 'LANDING_PAGE_VIEWS',
  LEAD_GENERATION: 'LEAD_GENERATION',
  QUALITY_LEAD: 'QUALITY_LEAD',
  LINK_CLICKS: 'LINK_CLICKS',
  OFFSITE_CONVERSIONS: 'OFFSITE_CONVERSIONS',
  PAGE_LIKES: 'PAGE_LIKES',
  POST_ENGAGEMENT: 'POST_ENGAGEMENT',
  QUALITY_CALL: 'QUALITY_CALL',
  VISIT_INSTAGRAM_PROFILE: 'VISIT_INSTAGRAM_PROFILE',
  VALUE: 'VALUE',
  THRUPLAY: 'THRUPLAY',
};

export const BoostAdSetOptimizationGoalStrict = {
  REACH: 'REACH',
  AD_RECALL_LIFT: 'AD_RECALL_LIFT',
  CONVERSATIONS: 'CONVERSATIONS',
  CLICKS: 'CLICKS',
  APP_INSTALLS: 'APP_INSTALLS',
  APP_INSTALLS_AND_OFFSITE_CONVERSIONS: 'APP_INSTALLS_AND_OFFSITE_CONVERSIONS',
  DERIVED_EVENTS: 'DERIVED_EVENTS',
  ENGAGED_USERS: 'ENGAGED_USERS',
  EVENT_RESPONSES: 'EVENT_RESPONSES',
  IMPRESSIONS: 'IMPRESSIONS',
  LANDING_PAGE_VIEWS: 'LANDING_PAGE_VIEWS',
  LEAD_GENERATION: 'LEAD_GENERATION',
  QUALITY_LEAD: 'QUALITY_LEAD',
  LINK_CLICKS: 'LINK_CLICKS',
  OFFSITE_CONVERSIONS: 'OFFSITE_CONVERSIONS',
  PAGE_LIKES: 'PAGE_LIKES',
  POST_ENGAGEMENT: 'POST_ENGAGEMENT',
  QUALITY_CALL: 'QUALITY_CALL',
  VISIT_INSTAGRAM_PROFILE: 'VISIT_INSTAGRAM_PROFILE',
  VALUE: 'VALUE',
  THRUPLAY: 'THRUPLAY',
} as const;

export const BoostAdSetStatus = {
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  DELETED: 'DELETED',
  ARCHIVED: 'ARCHIVED',
  DRAFT: 'DRAFT',
};

export const BoostAdSetStatusStrict = {
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  DELETED: 'DELETED',
  ARCHIVED: 'ARCHIVED',
  DRAFT: 'DRAFT',
} as const;

export const BoostAdSetDestinationType = {
  UNDEFINED: 'UNDEFINED',
  APP: 'APP',
  APPLINKS_AUTOMATIC: 'APPLINKS_AUTOMATIC',
  FACEBOOK: 'FACEBOOK',
  MESSENGER: 'MESSENGER',
  ON_AD: 'ON_AD',
  ON_EVENT: 'ON_EVENT',
  ON_PAGE: 'ON_PAGE',
  ON_POST: 'ON_POST',
  ON_VIDEO: 'ON_VIDEO',
  WEBSITE: 'WEBSITE',
  INSTAGRAM_DIRECT: 'INSTAGRAM_DIRECT',
};

export const BoostAdSetDestinationTypeStrict = {
  UNDEFINED: 'UNDEFINED',
  APP: 'APP',
  APPLINKS_AUTOMATIC: 'APPLINKS_AUTOMATIC',
  FACEBOOK: 'FACEBOOK',
  MESSENGER: 'MESSENGER',
  ON_AD: 'ON_AD',
  ON_EVENT: 'ON_EVENT',
  ON_PAGE: 'ON_PAGE',
  ON_POST: 'ON_POST',
  ON_VIDEO: 'ON_VIDEO',
  WEBSITE: 'WEBSITE',
  INSTAGRAM_DIRECT: 'INSTAGRAM_DIRECT',
} as const;

export const BoostAdSetObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostAdSet:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostAdSet',
};

export const BoostAdSetObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostAdSet:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostAdSet',
} as const;

export type BoostAdSet = {
  /**
   * The bid amount that affects the entire AdSet
   */
  bidAmount?: number;
  /**
   * The daily budget for this adset
   */
  dailyBudget?: number;
  /**
   * The billing event that is app set is using
   *  Allowed Values:
   * -   `APP_INSTALLS`: Will optimize for people more likely to install your app.
   * -   `CLICKS`: Deprecated. Only available in read mode.
   * -   `IMPRESSIONS`: Will show the ads as many times as possible.
   * -   `LINK_CLICKS`: Will optimize for people more likely to click in the link of the ad.
   * -   `PURCHASE`: Pay for ads when people purchase your advertised item
   * -   `THRUPLAY`: Will optimize delivery of your ads to people are more likely to play your ad to completion, or play it for at least 15 seconds.
   * -   `POST_ENGAGEMENT`: Will optimize for people more likely to engage with your post.
   * -   `OFFER_CLAIMS`: Pay when people claim the offer.
   * -   `PAGE_LIKES`: Will optimize for people more likely to like your page.
   * -   `LISTING_INTERACTION`: Pay for ads when people do the listed interaction
   *
   */
  billingEvent?: (typeof BoostAdSetBillingEvent)[keyof typeof BoostAdSetBillingEvent];
  /**
   * The id of the BoostCampaign in which the AdSet was created
   */
  boostCampaignId?: number;
  boostCampaign?: BoostCampaign;
  /**
   * The external id of the AdSet (in Meta)
   */
  externalId?: string;
  /**
   * The name of the AdSet
   */
  name?: string;
  /**
   * What this AdSet is optimized for
   *  Allowed Values:
   * -   `REACH`: Optimize to reach the most unique users for each day or interval specified in frequency_control_specs.
   * -   `AD_RECALL_LIFT`: Optimize for people more likely to remember seeing your ads.
   * -   `CONVERSATIONS`: Directs ads to people more likely to have a conversation with the business.
   * -   `CLICKS`: Deprecated. Only available in read mode.
   * -   `APP_INSTALLS`: Will optimize for people more likely to install your app.
   * -   `APP_INSTALLS_AND_OFFSITE_CONVERSIONS`: Optimizes for people more likely to install your app and make a conversion in your site.
   * -   `DERIVED_EVENTS`: Optimize for retention, which reaches people who are most likely to return to the app and open it again during a given time frame after installing.
   * You can choose either two days, meaning the app is likely to be reopened between 24 and 48 hours after installation;
   * or seven days, meaning the app is likely to be reopened between 144 and 168 hours after installation.
   * -   `ENGAGED_USERS`: Will optimize for people more likely to take a particular action in your app.
   * -   `EVENT_RESPONSES`: Will optimize for people more likely to attend your event.
   * -   `IMPRESSIONS`: Will show the ads as many times as possible.
   * -   `LANDING_PAGE_VIEWS`: Optimize for people who are most likely to click on and load your chosen landing page.
   * -   `LEAD_GENERATION`: Will optimize for people more likely to fill out a lead generation form.
   * -   `QUALITY_LEAD`: Optimize for people more likely to fill out a lead generation form.
   * -   `LINK_CLICKS`: Will optimize for people more likely to click in the link of the ad.
   * -   `OFFSITE_CONVERSIONS`: Will optimize for people more likely to make a conversion in the site.
   * -   `PAGE_LIKES`: Will optimize for people more likely to like your page.
   * -   `POST_ENGAGEMENT`: Will optimize for people more likely to engage with your post.
   * -   `QUALITY_CALL`: Optimize for people who are likely to call the advertiser.
   * -   `VISIT_INSTAGRAM_PROFILE`: Optimize for visits to the advertiser's instagram profile.
   * -   `VALUE`: Will optimize for maximum total purchase value within the specified attribution window.
   * -   `THRUPLAY`: Will optimize delivery of your ads to people are more likely to play your ad to completion, or play it for at least 15 seconds.
   *
   */
  optimizationGoal?: (typeof BoostAdSetOptimizationGoal)[keyof typeof BoostAdSetOptimizationGoal];
  /**
   * The start date of the AdSet
   */
  startTime?: string;
  /**
   * The stop time of the AdSet
   */
  stopTime?: string;
  /**
   * Status of the AdSet
   *  Allowed Values:
   * -   `ACTIVE`
   * -   `PAUSED`
   * -   `DELETED`
   * -   `ARCHIVED`
   * -   `DRAFT`
   *
   */
  status?: (typeof BoostAdSetStatus)[keyof typeof BoostAdSetStatus];
  /**
   * Destination type of the AdSet
   *  Allowed Values:
   * -   `UNDEFINED`: No defined destination type.
   * -   `APP`: Ads in the ad set must provide an app ID in the promoted object. Destination is either an app installed on someone's phone or the app store if the app is not installed.
   * -   `APPLINKS_AUTOMATIC`: Used with Advantage+ catalog ads. The ad set's promoted object must have a product_set_id parameter. Facebook determines the displayed destination based on the applink specified in the ad creative.
   * -   `FACEBOOK`: Used with Advantage+ catalog ads. The catalog being promoted needs to support the on-Facebook Advantage+ catalog ads use case in Commerce Manager. All ads in the ad set must have an ad creative with Marketplace as the destination. This is currently only available for the Vehicle vertical.
   * -   `MESSENGER`: All ads in the ad set must have ad creative with Messenger as a destination.
   * -   `ON_AD`: The objective in the parent campaign must be in set {OUTCOME_LEADS}.
   * -   `ON_EVENT`: The objective in the parent campaign must be in set {OUTCOME_ENGAGEMENTS}.
   * -   `ON_PAGE`: The objective in the parent campaign must be in set {OUTCOME_ENGAGEMENTS}.
   * -   `ON_POST`: The objective in the parent campaign must be in set {OUTCOME_ENGAGEMENTS}.
   * -   `ON_VIDEO`: The objective in the parent campaign must be in set {OUTCOME_ENGAGEMENTS}.
   * -   `WEBSITE`: All ads in the ad set must have ad creative with at least one valid, external URL.
   * -   `INSTAGRAM_DIRECT`: Used when advertisers want users to send an Instagram direct message.
   *
   */
  destinationType?: (typeof BoostAdSetDestinationType)[keyof typeof BoostAdSetDestinationType];
  targeting?: BoostAdSetTargeting;
  ads?: BoostAds;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetObjectType)[keyof typeof BoostAdSetObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
