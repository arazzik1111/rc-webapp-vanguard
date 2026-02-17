import { LineChartSeriaDataSchema } from '@models/swagger//LineChartSeriaDataSchema';

export type LineChartSeriaSchema = {
  name?: string;
  data?: LineChartSeriaDataSchema[];
};
