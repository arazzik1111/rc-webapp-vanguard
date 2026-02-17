export const AppTranslationKeyUnderstandabilityObjectType = {
  App_Domain_Common_Entities_App_Translations_AppTranslationKeyUnderstandability:
    'App\\Domain\\Common\\Entities\\App\\Translations\\AppTranslationKeyUnderstandability',
};

export type AppTranslationKeyUnderstandability = {
  /**
   * Understandability score for a TranslationKey
   *
   * An evaluation score representing the clarity and understandability of a Translation Key.
   * The score is a float value between 0 and 1, where 1 means perfectly understandable and
   * 0 means that the key is not precise and may possibly be translated incorrectly.
   */
  understandabilityScore?: number;
  /**
   * If true, TrnaslationKey is acceptable, else not
   */
  isAcceptableTranslationKey?: boolean;
  /**
   * Reasoning for evaluation score
   */
  reasoningForEvaluationScore?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AppTranslationKeyUnderstandabilityObjectType)[keyof typeof AppTranslationKeyUnderstandabilityObjectType];
};
