export const AIReviewsSettingsReviewsSummaryFrequency = {
  WEEKLY: 'WEEKLY',
  BIWEEKLY: 'BIWEEKLY',
};

export const AIReviewsSettingsReviewsSummaryFrequencyStrict = {
  WEEKLY: 'WEEKLY',
  BIWEEKLY: 'BIWEEKLY',
} as const;

export const AIReviewsSettingsObjectType = {
  App_Domain_AI_Entities_Settings_AIReviewsSettings_AIReviewsSettings:
    'App\\Domain\\AI\\Entities\\Settings\\AIReviewsSettings\\AIReviewsSettings',
};

export const AIReviewsSettingsObjectTypeStrict = {
  App_Domain_AI_Entities_Settings_AIReviewsSettings_AIReviewsSettings:
    'App\\Domain\\AI\\Entities\\Settings\\AIReviewsSettings\\AIReviewsSettings',
} as const;

export type AIReviewsSettings = {
  /**
   * If true, notifications are sent on:
   * - new Reviews (with or without auto-reply)
   * - Reply suggestions for new Reviews
   * - Auto-Replies for new Reviews
   */
  sendNotifications?: boolean;
  /**
   * Whether the AI should automatically reply to reviews
   */
  automaticallyReplyToReviews?: boolean;
  /**
   * Whether the AI should automatically reply to reviews with 1-2 stars or bad sentiment
   */
  automaticallyReplyToBadReviews?: boolean;
  /**
   * Whether the AI should automatically reply to reviews with 3 stars or neutral sentiment
   */
  automaticallyReplyToNeutralReviews?: boolean;
  /**
   * Whether the AI should automatically reply to reviews with 4-5 stars or good sentiment
   */
  automaticallyReplyToGoodReviews?: boolean;
  /**
   * If true, generates reply suggestions with AI, this is executed only if sendNotifications is true
   */
  generateReplySuggestions?: boolean;
  /**
   * Whether a summary of the reviews sent by AI should be sent
   */
  sendReviewsSummary?: boolean;
  /**
   * Custom instruction on how to reply, e.g. always reply as "John Doe, CTO"
   */
  customReplyInstructions?: string;
  /**
   * The frequency at which the reviews summary should be sent
   *  Allowed Values:
   * -   `WEEKLY`: Weekly reviews summary sending frequency
   * -   `BIWEEKLY`: Biweekly reviews summary sending frequency
   *
   */
  reviewsSummaryFrequency?: (typeof AIReviewsSettingsReviewsSummaryFrequency)[keyof typeof AIReviewsSettingsReviewsSummaryFrequency];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AIReviewsSettingsObjectType)[keyof typeof AIReviewsSettingsObjectType];
};
