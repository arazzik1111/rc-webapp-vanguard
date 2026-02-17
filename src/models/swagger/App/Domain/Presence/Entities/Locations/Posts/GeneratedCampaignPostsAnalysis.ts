import { Location } from '@models/swagger/App/Domain/Presence/Entities/Locations/Location';

export const GeneratedCampaignPostsAnalysisPublishingFrequency = {
  FREQUENCY_CONSTANT: 'FREQUENCY_CONSTANT',
  FREQUENCY_INCREASING: 'FREQUENCY_INCREASING',
  FREQUENCY_DECREASING: 'FREQUENCY_DECREASING',
  FREQUENCY_PEAK: 'FREQUENCY_PEAK',
  FREQUENCY_VALLEY: 'FREQUENCY_VALLEY',
};

export const GeneratedCampaignPostsAnalysisPublishingFrequencyStrict = {
  FREQUENCY_CONSTANT: 'FREQUENCY_CONSTANT',
  FREQUENCY_INCREASING: 'FREQUENCY_INCREASING',
  FREQUENCY_DECREASING: 'FREQUENCY_DECREASING',
  FREQUENCY_PEAK: 'FREQUENCY_PEAK',
  FREQUENCY_VALLEY: 'FREQUENCY_VALLEY',
} as const;

export const GeneratedCampaignPostsAnalysisObjectType = {
  App_Domain_Presence_Entities_Locations_Posts_GeneratedCampaignPostsAnalysis:
    'App\\Domain\\Presence\\Entities\\Locations\\Posts\\GeneratedCampaignPostsAnalysis',
};

export const GeneratedCampaignPostsAnalysisObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Posts_GeneratedCampaignPostsAnalysis:
    'App\\Domain\\Presence\\Entities\\Locations\\Posts\\GeneratedCampaignPostsAnalysis',
} as const;

export type GeneratedCampaignPostsAnalysis = {
  location?: Location;
  /**
   * The custom instructions provided by User for the Posts series
   */
  userInstructions?: string;
  /**
   * The date when the Posts series should start
   */
  startDate?: string;
  /**
   * The date when the Posts series should end
   */
  endDate?: string;
  /**
   * Recommended number of posts to be generated
   */
  postsNumber?: number;
  /**
   * Whether to publish the campaign Posts on Facebook
   */
  publishOnFacebook?: boolean;
  /**
   * Whether to publish the campaign Posts on Instagram
   */
  publishOnInstagram?: boolean;
  /**
   * Whether to publish the campaign Posts on Google
   */
  publishOnGoogle?: boolean;
  /**
   * Whether to publish the campaign Posts on LinkedIn
   */
  publishOnLinkedin?: boolean;
  /**
   * Whether to publish the campaign Posts on X
   */
  publishOnX?: boolean;
  /**
   * The frequency of Posts publishing
   *  Allowed Values:
   * -   `FREQUENCY_CONSTANT`
   * -   `FREQUENCY_INCREASING`
   * -   `FREQUENCY_DECREASING`
   * -   `FREQUENCY_PEAK`
   * -   `FREQUENCY_VALLEY`
   *
   */
  publishingFrequency?: (typeof GeneratedCampaignPostsAnalysisPublishingFrequency)[keyof typeof GeneratedCampaignPostsAnalysisPublishingFrequency];
  /**
   * General hashtag for the Posts series
   */
  hashtag?: string;
  /**
   * Keywords for the Posts series
   */
  photoKeywords?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GeneratedCampaignPostsAnalysisObjectType)[keyof typeof GeneratedCampaignPostsAnalysisObjectType];
};
