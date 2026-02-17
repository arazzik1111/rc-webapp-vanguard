import { LineChartSchema } from '@models/swagger//LineChartSchema';

export type LineChartResponseSchema = {
  status?: number;
  data?: LineChartSchema;
  message?: string;
};
