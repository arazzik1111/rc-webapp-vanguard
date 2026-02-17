import { BoostInsights } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/BoostInsights';
import { BoostAdAccountReachEstimate } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdAccountReachEstimate';
import { FacebookLocationInsights } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/Locations/Statistics/FacebookLocationInsights';
import { InstagramLocationInsights } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Instagram/Locations/Statistics/InstagramLocationInsights';
import { LinkedInLocationInsights } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Linkedin/Locations/Statistics/LinkedInLocationInsights';
import { XLocationInsights } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/X/Locations/Statistics/XLocationInsights';
import { LocationListingService } from '@models/swagger/App/Domain/Presence/Entities/Locations/ListingServices/LocationListingService';

export const SocialMediaInsightsStatisticsType = {
  TOTAL_LIKES: 'TOTAL_LIKES',
  TOTAL_COMMENTS: 'TOTAL_COMMENTS',
  TOTAL_SHARES: 'TOTAL_SHARES',
  TOTAL_IMPRESSIONS: 'TOTAL_IMPRESSIONS',
  TOTAL_UNIQUE_IMPRESSIONS: 'TOTAL_UNIQUE_IMPRESSIONS',
  TOTAL_CLICKS: 'TOTAL_CLICKS',
  FACEBOOK_ORGANIC_REACH: 'FACEBOOK_ORGANIC_REACH',
  FACEBOOK_PAID_REACH: 'FACEBOOK_PAID_REACH',
  TYPE_FOLLOWERS: 'TYPE_FOLLOWERS',
  TYPE_FOLLOWS: 'TYPE_FOLLOWS',
  FACEBOOK_UNFOLLOWS: 'FACEBOOK_UNFOLLOWS',
  TYPE_TOTAL_VIEWS: 'TYPE_TOTAL_VIEWS',
  FACEBOOK_PAID_IMPRESSIONS: 'FACEBOOK_PAID_IMPRESSIONS',
  FACEBOOK_AGE_GENDER: 'FACEBOOK_AGE_GENDER',
  CITIES: 'CITIES',
  COUNTRIES: 'COUNTRIES',
  INSTAGRAM_DAILY_FOLLOWERS: 'INSTAGRAM_DAILY_FOLLOWERS',
  INSTAGRAM_IMPRESSIONS: 'INSTAGRAM_IMPRESSIONS',
  INSTAGRAM_REACH: 'INSTAGRAM_REACH',
  INSTAGRAM_INTERACTIONS: 'INSTAGRAM_INTERACTIONS',
  INSTAGRAM_ACCOUNTS_ENGAGED: 'INSTAGRAM_ACCOUNTS_ENGAGED',
  INSTAGRAM_COMMENTS: 'INSTAGRAM_COMMENTS',
  INSTAGRAM_SHARES: 'INSTAGRAM_SHARES',
  INSTAGRAM_REPLIES: 'INSTAGRAM_REPLIES',
  INSTAGRAM_DEMOGRAPHICS_ENGAGED: 'INSTAGRAM_DEMOGRAPHICS_ENGAGED',
  INSTAGRAM_DEMOGRAPHICS_REACHED: 'INSTAGRAM_DEMOGRAPHICS_REACHED',
  INSTAGRAM_DEMOGRAPHICS: 'INSTAGRAM_DEMOGRAPHICS',
  LINKEDIN_ENGAGEMENT: 'LINKEDIN_ENGAGEMENT',
};

export const SocialMediaInsightsStatisticsTypeStrict = {
  TOTAL_LIKES: 'TOTAL_LIKES',
  TOTAL_COMMENTS: 'TOTAL_COMMENTS',
  TOTAL_SHARES: 'TOTAL_SHARES',
  TOTAL_IMPRESSIONS: 'TOTAL_IMPRESSIONS',
  TOTAL_UNIQUE_IMPRESSIONS: 'TOTAL_UNIQUE_IMPRESSIONS',
  TOTAL_CLICKS: 'TOTAL_CLICKS',
  FACEBOOK_ORGANIC_REACH: 'FACEBOOK_ORGANIC_REACH',
  FACEBOOK_PAID_REACH: 'FACEBOOK_PAID_REACH',
  TYPE_FOLLOWERS: 'TYPE_FOLLOWERS',
  TYPE_FOLLOWS: 'TYPE_FOLLOWS',
  FACEBOOK_UNFOLLOWS: 'FACEBOOK_UNFOLLOWS',
  TYPE_TOTAL_VIEWS: 'TYPE_TOTAL_VIEWS',
  FACEBOOK_PAID_IMPRESSIONS: 'FACEBOOK_PAID_IMPRESSIONS',
  FACEBOOK_AGE_GENDER: 'FACEBOOK_AGE_GENDER',
  CITIES: 'CITIES',
  COUNTRIES: 'COUNTRIES',
  INSTAGRAM_DAILY_FOLLOWERS: 'INSTAGRAM_DAILY_FOLLOWERS',
  INSTAGRAM_IMPRESSIONS: 'INSTAGRAM_IMPRESSIONS',
  INSTAGRAM_REACH: 'INSTAGRAM_REACH',
  INSTAGRAM_INTERACTIONS: 'INSTAGRAM_INTERACTIONS',
  INSTAGRAM_ACCOUNTS_ENGAGED: 'INSTAGRAM_ACCOUNTS_ENGAGED',
  INSTAGRAM_COMMENTS: 'INSTAGRAM_COMMENTS',
  INSTAGRAM_SHARES: 'INSTAGRAM_SHARES',
  INSTAGRAM_REPLIES: 'INSTAGRAM_REPLIES',
  INSTAGRAM_DEMOGRAPHICS_ENGAGED: 'INSTAGRAM_DEMOGRAPHICS_ENGAGED',
  INSTAGRAM_DEMOGRAPHICS_REACHED: 'INSTAGRAM_DEMOGRAPHICS_REACHED',
  INSTAGRAM_DEMOGRAPHICS: 'INSTAGRAM_DEMOGRAPHICS',
  LINKEDIN_ENGAGEMENT: 'LINKEDIN_ENGAGEMENT',
} as const;

export const SocialMediaInsightsTimeGranularity = {
  DAY: 'DAY',
  WEEK: 'WEEK',
  MONTH: 'MONTH',
  YEAR: 'YEAR',
};

export const SocialMediaInsightsTimeGranularityStrict = {
  DAY: 'DAY',
  WEEK: 'WEEK',
  MONTH: 'MONTH',
  YEAR: 'YEAR',
} as const;

export const SocialMediaInsightsObjectType = {
  App_Domain_Presence_Entities_Locations_Engagement_SocialMediaInsights_SocialMediaInsights:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\SocialMediaInsights\\SocialMediaInsights',
};

export const SocialMediaInsightsObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Engagement_SocialMediaInsights_SocialMediaInsights:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\SocialMediaInsights\\SocialMediaInsights',
} as const;

export type SocialMediaInsights = {
  /**
   * The type of the statistic in case only one is needed
   *  Allowed Values:
   * -   `TOTAL_LIKES`: Facebook and Instagram total likes
   * -   `TOTAL_COMMENTS`: Total number of comments for a Location on a Listing
   * -   `TOTAL_SHARES`: Total number of shares for a Location on a Listing
   * -   `TOTAL_IMPRESSIONS`: Total number of impressions for a Location on a Listing
   * -   `TOTAL_UNIQUE_IMPRESSIONS`: Total number of unique impressions for a Location on a Listing
   * -   `TOTAL_CLICKS`: Total number of clicks for a Location on a Listing
   * -   `FACEBOOK_ORGANIC_REACH`: Facebook organic reach
   * -   `FACEBOOK_PAID_REACH`: Facebook paid reach
   * -   `TYPE_FOLLOWERS`: Facebook and Instagram total followers
   * -   `TYPE_FOLLOWS`: Facebook and Instagram follows for selected period
   * -   `FACEBOOK_UNFOLLOWS`: Facebook unfollows for selected period
   * -   `TYPE_TOTAL_VIEWS`: Facebook and Instagram number of views for page
   * -   `FACEBOOK_PAID_IMPRESSIONS`: Facebook paid impressions for selected period
   * -   `FACEBOOK_AGE_GENDER`: Facebook reach distributed by age group and gender
   * -   `CITIES`: Facebook likes by city
   * -   `COUNTRIES`: Facebook likes by country
   * -   `INSTAGRAM_DAILY_FOLLOWERS`: Instagram daily followers
   * -   `INSTAGRAM_IMPRESSIONS`: Instagram media views
   * -   `INSTAGRAM_REACH`: Instagram reach
   * -   `INSTAGRAM_INTERACTIONS`: Instagram post, story, reels, video, live interactions
   * -   `INSTAGRAM_ACCOUNTS_ENGAGED`: Instagram number of accounts engaged with
   * -   `INSTAGRAM_COMMENTS`: Instagram number of comments
   * -   `INSTAGRAM_SHARES`: Instagram number of shares
   * -   `INSTAGRAM_REPLIES`: Instagram number of replies
   * -   `INSTAGRAM_DEMOGRAPHICS_ENGAGED`: Instagram demographic characteristics of engaged accounts: city, country, gender distribution
   * -   `INSTAGRAM_DEMOGRAPHICS_REACHED`: Instagram demographic characteristics of reached accounts: city, country, gender distribution
   * -   `INSTAGRAM_DEMOGRAPHICS`: Instagram demographics of followers: city, country, gender distribution
   * -   `LINKEDIN_ENGAGEMENT`: Number of organic clicks, likes, comments, and shares over impressions.
   *
   */
  statisticsType?: (typeof SocialMediaInsightsStatisticsType)[keyof typeof SocialMediaInsightsStatisticsType];
  facebookLocationInsights?: FacebookLocationInsights;
  instagramLocationInsights?: InstagramLocationInsights;
  linkedInLocationInsights?: LinkedInLocationInsights;
  xLocationInsights?: XLocationInsights;
  listingService?: LocationListingService;
  potentialAudience?: BoostAdAccountReachEstimate;
  ageGenderStats?: BoostInsights;
  adTrends?: BoostInsights;
  /**
   * Insight data start date
   */
  startDate?: string;
  /**
   * Insight data end date
   */
  endDate?: string;
  /**
   * The time granularity for insights
   *  Allowed Values:
   * -   `DAY`: The day granularity for requested insights
   * -   `WEEK`: The week granularity for requested insights
   * -   `MONTH`: The month granularity for requested insights
   * -   `YEAR`: The year granularity for requested insights
   *
   */
  timeGranularity?: (typeof SocialMediaInsightsTimeGranularity)[keyof typeof SocialMediaInsightsTimeGranularity];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SocialMediaInsightsObjectType)[keyof typeof SocialMediaInsightsObjectType];
};
