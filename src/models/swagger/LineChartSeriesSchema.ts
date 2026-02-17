import { LineChartSeriaSchema } from '@models/swagger//LineChartSeriaSchema';

export type LineChartSeriesSchema = {
  actualSeries?: LineChartSeriaSchema[];
  previousSeries?: LineChartSeriaSchema[];
};
