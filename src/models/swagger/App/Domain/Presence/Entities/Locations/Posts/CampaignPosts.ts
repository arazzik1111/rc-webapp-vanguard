import { Location } from '@models/swagger/App/Domain/Presence/Entities/Locations/Location';
import { Posts } from '@models/swagger/App/Domain/Presence/Entities/Locations/Posts/Posts';

export const CampaignPostsPublishingFrequency = {
  FREQUENCY_CONSTANT: 'FREQUENCY_CONSTANT',
  FREQUENCY_INCREASING: 'FREQUENCY_INCREASING',
  FREQUENCY_DECREASING: 'FREQUENCY_DECREASING',
  FREQUENCY_PEAK: 'FREQUENCY_PEAK',
  FREQUENCY_VALLEY: 'FREQUENCY_VALLEY',
};

export const CampaignPostsPublishingFrequencyStrict = {
  FREQUENCY_CONSTANT: 'FREQUENCY_CONSTANT',
  FREQUENCY_INCREASING: 'FREQUENCY_INCREASING',
  FREQUENCY_DECREASING: 'FREQUENCY_DECREASING',
  FREQUENCY_PEAK: 'FREQUENCY_PEAK',
  FREQUENCY_VALLEY: 'FREQUENCY_VALLEY',
} as const;

export const CampaignPostsObjectType = {
  App_Domain_Presence_Entities_Locations_Posts_CampaignPosts:
    'App\\Domain\\Presence\\Entities\\Locations\\Posts\\CampaignPosts',
};

export const CampaignPostsObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Posts_CampaignPosts:
    'App\\Domain\\Presence\\Entities\\Locations\\Posts\\CampaignPosts',
} as const;

export type CampaignPosts = {
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
   * The custom instructions provided by User for the Posts series
   */
  userInstructions?: string;
  /**
   * The number of posts to be generated for the campaign. The Minimum is two for a campaign
   */
  numberOfPostsToGenerate?: number;
  /**
   * The date when the campaign starts
   */
  startDate?: string;
  /**
   * The date when the campaign ends
   */
  endDate?: string;
  /**
   * The frequency of Posts publishing
   *  Allowed Values:
   * -   `FREQUENCY_CONSTANT`: The Posts are published at regular, evenly spaced intervals.
   * The between Posts stay consistent throughout the schedule.
   * -   `FREQUENCY_INCREASING`: Posts are published more frequently over the time.
   * The gap between each Post shortness as the schedule progresses.
   * -   `FREQUENCY_DECREASING`: Posts are published less frequently over the time.
   * The gap between each Post gradually increases as the schedule progresses.
   * -   `FREQUENCY_PEAK`: A combination on Increasing and Decreasing frequencies.
   * The gap between each Post increases, reaches peak amount and then decreases.
   * -   `FREQUENCY_VALLEY`: Also a combination on Increasing and Decreasing frequencies but reversed.
   * The gap between each Post decreases, reaches the lowest amount and then it increases again.
   *
   */
  publishingFrequency?: (typeof CampaignPostsPublishingFrequency)[keyof typeof CampaignPostsPublishingFrequency];
  /**
   * General hashtag for the Posts series
   */
  hashtag?: string;
  /**
   * Keywords for the Posts series
   */
  photoKeywords?: string;
  posts?: Posts;
  /**
   * The id of the Location associated with the Campaign
   */
  locationId?: number;
  location?: Location;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof CampaignPostsObjectType)[keyof typeof CampaignPostsObjectType];
};
