export const BoostCampaignChangeStatusRequestDtoStatus = {
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
};

export const BoostCampaignChangeStatusRequestDtoStatusStrict = {
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
} as const;

export type BoostCampaignChangeStatusRequestDto = {
  /**
   *
   *  Allowed Values:
   * -   `ACTIVE`
   * -   `PAUSED`
   *
   */
  status: (typeof BoostCampaignChangeStatusRequestDtoStatus)[keyof typeof BoostCampaignChangeStatusRequestDtoStatus];
};
