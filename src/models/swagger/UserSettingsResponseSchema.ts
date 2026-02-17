import { UserSettingsSchema } from '@models/swagger//UserSettingsSchema';

export type UserSettingsResponseSchema = {
  status?: number;
  data?: UserSettingsSchema;
  message?: string;
};
