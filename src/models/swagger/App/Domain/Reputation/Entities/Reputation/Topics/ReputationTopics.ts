import { Locale } from '@models/swagger/App/Domain/Common/Entities/Locales/Locale';
import { ReputationTopic } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Topics/ReputationTopic';

export const ReputationTopicsObjectType = {
  App_Domain_Reputation_Entities_Reputation_Topics_ReputationTopics:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Topics\\ReputationTopics',
};

export const ReputationTopicsObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Topics_ReputationTopics:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Topics\\ReputationTopics',
} as const;

export type ReputationTopics = {
  /**
   * Start date from first considered Review
   */
  startDate?: string;
  /**
   * End date from last considered Review
   */
  endDate?: string;
  interfaceLocale?: Locale;
  elements?: ReputationTopic[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReputationTopicsObjectType)[keyof typeof ReputationTopicsObjectType];
};
