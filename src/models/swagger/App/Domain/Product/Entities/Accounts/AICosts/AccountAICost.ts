export const AccountAICostPrompt = {
  'APP.TRANSLATIONS.MULTILOCALE.INFORMAL': 'APP.TRANSLATIONS.MULTILOCALE.INFORMAL',
  'APP.TRANSLATIONS.SINGLELOCALE.INFORMAL': 'APP.TRANSLATIONS.SINGLELOCALE.INFORMAL',
  'APP.TRANSLATIONS.SINGLELOCALE.FORMAL': 'APP.TRANSLATIONS.SINGLELOCALE.FORMAL',
  'APP.GENERATED.REVIEW.REPLY': 'APP.GENERATED.REVIEW.REPLY',
  'APP.GENERATED.REVIEW.REPLY.ADJUST': 'APP.GENERATED.REVIEW.REPLY.ADJUST',
  'APP.GENERATED.POST.INSTRUCTION': 'APP.GENERATED.POST.INSTRUCTION',
  'APP.GENERATED.POST.COMPETITORS': 'APP.GENERATED.POST.COMPETITORS',
  'APP.AI.TEXT.ADJUSTMENT': 'APP.AI.TEXT.ADJUSTMENT',
  'APP.AI.TEXT.ADJUST': 'APP.AI.TEXT.ADJUST',
  'APP.AI.TEXT.KEYWORDS': 'APP.AI.TEXT.KEYWORDS',
  'APP.AI.PROMPT.INJECTION.DETECTION': 'APP.AI.PROMPT.INJECTION.DETECTION',
  'APP.TRANSLATIONKEY.UNDERSTANDABILITY': 'APP.TRANSLATIONKEY.UNDERSTANDABILITY',
  'APP.SEO.PROPOSE_KEYWORDS': 'APP.SEO.PROPOSE_KEYWORDS',
  'APP.SEO.SUMMARIZE.COMPANY_TEXT.FROM.WEBSITE': 'APP.SEO.SUMMARIZE.COMPANY_TEXT.FROM.WEBSITE',
};

export const AccountAICostInterval = {
  ALL_TIME: 'ALL_TIME',
  YEAR: 'YEAR',
  MONTH: 'MONTH',
  WEEK: 'WEEK',
  DATE: 'DATE',
};

export const AccountAICostObjectType = {
  App_Domain_Product_Entities_Accounts_AICosts_AccountAICost:
    'App\\Domain\\Product\\Entities\\Accounts\\AICosts\\AccountAICost',
};

export type AccountAICost = {
  /**
   * The prompt for which costs have been spent
   * Allowed Values:
   * -   `APP.TRANSLATIONS.MULTILOCALE.INFORMAL`
   * -   `APP.TRANSLATIONS.SINGLELOCALE.INFORMAL`
   * -   `APP.TRANSLATIONS.SINGLELOCALE.FORMAL`
   * -   `APP.GENERATED.REVIEW.REPLY`
   * -   `APP.GENERATED.REVIEW.REPLY.ADJUST`
   * -   `APP.GENERATED.POST.INSTRUCTION`
   * -   `APP.GENERATED.POST.COMPETITORS`
   * -   `APP.AI.TEXT.ADJUSTMENT`
   * -   `APP.AI.TEXT.ADJUST`
   * -   `APP.AI.TEXT.KEYWORDS`
   * -   `APP.AI.PROMPT.INJECTION.DETECTION`
   * -   `APP.TRANSLATIONKEY.UNDERSTANDABILITY`
   * -   `APP.SEO.PROPOSE_KEYWORDS`
   * -   `APP.SEO.SUMMARIZE.COMPANY_TEXT.FROM.WEBSITE`
   *
   */
  prompt?: (typeof AccountAICostPrompt)[keyof typeof AccountAICostPrompt];
  /**
   * The summarizing interval of the AI Service Cost e.g. YEAR, WEEK etc.
   * Allowed Values:
   * -   `ALL_TIME`
   * -   `YEAR`
   * -   `MONTH`
   * -   `WEEK`
   * -   `DATE`
   *
   */
  interval?: (typeof AccountAICostInterval)[keyof typeof AccountAICostInterval];
  /**
   * The first date of the interval e.g.
   * - in case of type ALL_TIME: null, no date necessary
   * - in case of type YEAR: <year>-01-01
   * - in case of type MONTH: <year>-<month>-01
   * - in case of type WEEK: first day of week (monday) of all tracks logged in the particular week, e.g. 2023-01-02
   * - in case of type DATE: the exact date yyyy-mm-dd
   */
  firstDateOfInterval?: string;
  /**
   * Account ID
   */
  accountId?: number;
  /**
   * Project ID
   */
  projectId?: number;
  /**
   * Total Costs for the AI service in the interval
   */
  costsInUSD?: number;
  /**
   * The internal identifier of the entity
   */
  id?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AccountAICostObjectType)[keyof typeof AccountAICostObjectType];
};
