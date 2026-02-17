import { UpsellingResellerMigratorSchema } from '@models/swagger//UpsellingResellerMigratorSchema';

export type UpsellingResellerMigratorResponseSchema = {
  status?: number;
  data?: UpsellingResellerMigratorSchema;
  message?: string;
};
