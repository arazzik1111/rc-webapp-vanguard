import { PersonGender } from '@models/swagger/App/Domain/Common/Entities/Persons/PersonGender';

export const InsightGenderStatisticObjectType = {
  App_Domain_Presence_Entities_Locations_Engagement_SocialMediaInsights_InsightGenderStatistic:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\SocialMediaInsights\\InsightGenderStatistic',
};

export const InsightGenderStatisticObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Engagement_SocialMediaInsights_InsightGenderStatistic:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\SocialMediaInsights\\InsightGenderStatistic',
} as const;

export type InsightGenderStatistic = {
  gender?: PersonGender;
  /**
   * The integer value
   */
  value?: number;
  /**
   * The key of the key-value pair
   */
  key?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof InsightGenderStatisticObjectType)[keyof typeof InsightGenderStatisticObjectType];
};
