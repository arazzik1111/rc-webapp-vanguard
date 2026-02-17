export const ReputationTopicSentiment = {
  GOOD: 'GOOD',
  NEUTRAL: 'NEUTRAL',
  BAD: 'BAD',
};

export const ReputationTopicSentimentStrict = {
  GOOD: 'GOOD',
  NEUTRAL: 'NEUTRAL',
  BAD: 'BAD',
} as const;

export const ReputationTopicRelevance = {
  HIGHEST: 'HIGHEST',
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW',
  LOWEST: 'LOWEST',
};

export const ReputationTopicRelevanceStrict = {
  HIGHEST: 'HIGHEST',
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW',
  LOWEST: 'LOWEST',
} as const;

export const ReputationTopicObjectType = {
  App_Domain_Reputation_Entities_Reputation_Topics_ReputationTopic:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Topics\\ReputationTopic',
};

export const ReputationTopicObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Topics_ReputationTopic:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Topics\\ReputationTopic',
} as const;

export type ReputationTopic = {
  /**
   * Description of topic, issue or strength
   */
  topic?: string;
  /**
   * Summary's star rating, similar to Review, 5 = best, 1 worst
   */
  rating?: number;
  /**
   * Summary's sentiment based on rating
   *  Allowed Values:
   * -   `GOOD`
   * -   `NEUTRAL`
   * -   `BAD`
   *
   */
  sentiment?: (typeof ReputationTopicSentiment)[keyof typeof ReputationTopicSentiment];
  /**
   * Examples backing up the stated topic
   */
  examples?: any[];
  /**
   * Suggestions for improvements on particular issue
   */
  improvementSuggestions?: string;
  /**
   * Reputation dimensions keys matching the topic
   */
  reputationDimensionKeys?: any[];
  /**
   * Relevance of the topic
   *  Allowed Values:
   * -   `HIGHEST`
   * -   `HIGH`
   * -   `MEDIUM`
   * -   `LOW`
   * -   `LOWEST`
   *
   */
  relevance?: (typeof ReputationTopicRelevance)[keyof typeof ReputationTopicRelevance];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReputationTopicObjectType)[keyof typeof ReputationTopicObjectType];
};
