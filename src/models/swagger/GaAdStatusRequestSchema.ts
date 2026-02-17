export const GaAdStatusRequestSchemaStatus = {
  ENABLED: 'ENABLED',
  PAUSED: 'PAUSED',
  enabled: 'enabled',
  paused: 'paused',
  suspended: 'suspended',
};

export const GaAdStatusRequestSchemaStatusStrict = {
  ENABLED: 'ENABLED',
  PAUSED: 'PAUSED',
  enabled: 'enabled',
  paused: 'paused',
  suspended: 'suspended',
} as const;

export type GaAdStatusRequestSchema = {
  status?: (typeof GaAdStatusRequestSchemaStatus)[keyof typeof GaAdStatusRequestSchemaStatus];
  sync?: boolean;
};
