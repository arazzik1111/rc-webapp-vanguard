export const AIMediaItemDownloadConfirmationObjectType = {
  App_Domain_AI_Entities_MediaItems_DownloadConfirmation_AIMediaItemDownloadConfirmation:
    'App\\Domain\\AI\\Entities\\MediaItems\\DownloadConfirmation\\AIMediaItemDownloadConfirmation',
};

export const AIMediaItemDownloadConfirmationObjectTypeStrict = {
  App_Domain_AI_Entities_MediaItems_DownloadConfirmation_AIMediaItemDownloadConfirmation:
    'App\\Domain\\AI\\Entities\\MediaItems\\DownloadConfirmation\\AIMediaItemDownloadConfirmation',
} as const;

export type AIMediaItemDownloadConfirmation = {
  /**
   * The download confirmation url
   */
  url?: string;
  /**
   * The author username for inclusion on credits
   */
  authorUsername?: string;
  /**
   * The author full name for inclusion on credits
   */
  authorFullName?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AIMediaItemDownloadConfirmationObjectType)[keyof typeof AIMediaItemDownloadConfirmationObjectType];
};
