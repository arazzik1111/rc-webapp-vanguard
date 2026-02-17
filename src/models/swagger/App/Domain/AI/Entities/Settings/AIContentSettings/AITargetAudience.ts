import { AgeRange } from '@models/swagger/App/Domain/AI/Entities/Settings/AIContentSettings/AgeRange';

export const AITargetAudienceObjectType = {
  App_Domain_AI_Entities_Settings_AIContentSettings_AITargetAudience:
    'App\\Domain\\AI\\Entities\\Settings\\AIContentSettings\\AITargetAudience',
};

export const AITargetAudienceObjectTypeStrict = {
  App_Domain_AI_Entities_Settings_AIContentSettings_AITargetAudience:
    'App\\Domain\\AI\\Entities\\Settings\\AIContentSettings\\AITargetAudience',
} as const;

export type AITargetAudience = {
  ageRange?: AgeRange;
  /**
   * Additional text that better describes the target audience
   */
  audienceDescription?: string;
  /**
   * If true, setting is considered, otherwise it is omitted
   */
  considerInPrompt?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AITargetAudienceObjectType)[keyof typeof AITargetAudienceObjectType];
};
