import { GaAdGroupBudgetDataSliderRangesSchema } from '@models/swagger//GaAdGroupBudgetDataSliderRangesSchema';

export type GaAdGroupBudgetDataSliderSchema = {
  min?: number;
  max?: number;
  selected?: number;
  ranges?: GaAdGroupBudgetDataSliderRangesSchema[];
};
