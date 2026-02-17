import { ReviewReply } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Reviews/ReviewReply';

export const ReviewRepliesObjectType = {
  App_Domain_Reputation_Entities_Reputation_Reviews_ReviewReplies:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Reviews\\ReviewReplies',
};

export const ReviewRepliesObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Reviews_ReviewReplies:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Reviews\\ReviewReplies',
} as const;

export type ReviewReplies = {
  elements?: ReviewReply[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewRepliesObjectType)[keyof typeof ReviewRepliesObjectType];
};
