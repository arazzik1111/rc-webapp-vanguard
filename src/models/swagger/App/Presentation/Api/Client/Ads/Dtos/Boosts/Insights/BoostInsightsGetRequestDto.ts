export const BoostInsightsGetRequestDtoLevel = {
  account: 'account',
  campaign: 'campaign',
  adset: 'adset',
  ad: 'ad',
};

export const BoostInsightsGetRequestDtoLevelStrict = {
  account: 'account',
  campaign: 'campaign',
  adset: 'adset',
  ad: 'ad',
} as const;

export type BoostInsightsGetRequestDto = {
  /**
   * The level of the insights returned
   *  Allowed Values:
   * -   `account`
   * -   `campaign`
   * -   `adset`
   * -   `ad`
   *
   */
  level: (typeof BoostInsightsGetRequestDtoLevel)[keyof typeof BoostInsightsGetRequestDtoLevel];
  /**
   * Start date for Insights. Must be Y-m-d
   */
  since?: string;
  /**
   * End Date for Insights. Must be Y-m-d
   */
  until?: string;
  /**
   * The time increment. Default is "All days" and it returns totals. Can send number of days ex: 1
   */
  timeIncrement?: string;
  /**
   * Used when trying to get Insights for a single Element of a Level (ad, adset, campaign). Does not work with level account.
   */
  queryId?: string;
};
