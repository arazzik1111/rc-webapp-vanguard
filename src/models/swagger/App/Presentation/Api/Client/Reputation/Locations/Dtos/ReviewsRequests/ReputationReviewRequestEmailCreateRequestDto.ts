export const ReputationReviewRequestEmailCreateRequestDtoTemplate = {
  EMAIL_DEFAULT: 'EMAIL_DEFAULT',
  PRINT_DEFAULT: 'PRINT_DEFAULT',
  FLYER: 'FLYER',
  QR_CODE: 'QR_CODE',
  STICKER: 'STICKER',
  SMS_DEFAULT: 'SMS_DEFAULT',
};

export const ReputationReviewRequestEmailCreateRequestDtoTemplateStrict = {
  EMAIL_DEFAULT: 'EMAIL_DEFAULT',
  PRINT_DEFAULT: 'PRINT_DEFAULT',
  FLYER: 'FLYER',
  QR_CODE: 'QR_CODE',
  STICKER: 'STICKER',
  SMS_DEFAULT: 'SMS_DEFAULT',
} as const;

export const ReputationReviewRequestEmailCreateRequestDtoWritingStyle = {
  FORMAL: 'FORMAL',
  PROFESSIONAL: 'PROFESSIONAL',
  INFORMATIVE: 'INFORMATIVE',
  FRIENDLY: 'FRIENDLY',
  BOLD: 'BOLD',
  WITTY: 'WITTY',
  DEFAULT: 'DEFAULT',
};

export const ReputationReviewRequestEmailCreateRequestDtoWritingStyleStrict = {
  FORMAL: 'FORMAL',
  PROFESSIONAL: 'PROFESSIONAL',
  INFORMATIVE: 'INFORMATIVE',
  FRIENDLY: 'FRIENDLY',
  BOLD: 'BOLD',
  WITTY: 'WITTY',
  DEFAULT: 'DEFAULT',
} as const;

export const ReputationReviewRequestEmailCreateRequestDtoStatus = {
  NOT_SENT: 'NOT_SENT',
  SENT: 'SENT',
  DELETED: 'DELETED',
  ERROR: 'ERROR',
  QUEUED: 'QUEUED',
};

export const ReputationReviewRequestEmailCreateRequestDtoStatusStrict = {
  NOT_SENT: 'NOT_SENT',
  SENT: 'SENT',
  DELETED: 'DELETED',
  ERROR: 'ERROR',
  QUEUED: 'QUEUED',
} as const;

export type ReputationReviewRequestEmailCreateRequestDto = {
  /**
   * The email address of the customer
   */
  customerEmail: string;
  /**
   * The name of the customer
   */
  customerName?: string;
  /**
   * The id of the LocationReviewRequest
   */
  locationReviewRequestId?: number;
  /**
   * Whether the customer has opted in or not
   */
  isOptIn?: boolean;
  /**
   * Whether the customer has opted in or not
   */
  isActive?: boolean;
  /**
   * The target directory for the email
   */
  targetDirectory?: string;
  /**
   * The LocationReviewRequestTemplate's template for the ReviewRequestEmail
   *  Allowed Values:
   * -   `EMAIL_DEFAULT`
   * -   `PRINT_DEFAULT`
   * -   `FLYER`
   * -   `QR_CODE`
   * -   `STICKER`
   * -   `SMS_DEFAULT`
   *
   */
  template?: (typeof ReputationReviewRequestEmailCreateRequestDtoTemplate)[keyof typeof ReputationReviewRequestEmailCreateRequestDtoTemplate];
  /**
   *
   *  Allowed Values:
   * -   `FORMAL`
   * -   `PROFESSIONAL`
   * -   `INFORMATIVE`
   * -   `FRIENDLY`
   * -   `BOLD`
   * -   `WITTY`
   * -   `DEFAULT`
   *
   */
  writingStyle?: (typeof ReputationReviewRequestEmailCreateRequestDtoWritingStyle)[keyof typeof ReputationReviewRequestEmailCreateRequestDtoWritingStyle];
  /**
   *
   *  Allowed Values:
   * -   `NOT_SENT`
   * -   `SENT`
   * -   `DELETED`
   * -   `ERROR`
   * -   `QUEUED`
   *
   */
  status?: (typeof ReputationReviewRequestEmailCreateRequestDtoStatus)[keyof typeof ReputationReviewRequestEmailCreateRequestDtoStatus];
};
