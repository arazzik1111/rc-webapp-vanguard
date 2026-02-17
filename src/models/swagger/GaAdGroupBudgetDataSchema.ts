import { GaAdGroupBudgetDataRangeSchema } from '@models/swagger//GaAdGroupBudgetDataRangeSchema';
import { GaAdGroupBudgetDataSliderSchema } from '@models/swagger//GaAdGroupBudgetDataSliderSchema';
import { GaAdGroupBudgetDataUpgradeSchema } from '@models/swagger//GaAdGroupBudgetDataUpgradeSchema';

export type GaAdGroupBudgetDataSchema = {
  sliderRange?: GaAdGroupBudgetDataSliderSchema;
  budgetRange?: GaAdGroupBudgetDataRangeSchema;
  upgrade?: GaAdGroupBudgetDataUpgradeSchema;
  hasPremiumBudget?: boolean;
  hidePremiumSectionSlider?: boolean;
  isApiUser?: boolean;
};
