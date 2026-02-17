// import { GARootState } from "../../../rootReducer";
import { PageSectionRecommended } from '@common/PageSectionRecommended/PageSectionRecommended';
import { GaAdGroupBudgetDataSchema } from '@models/swagger/GaAdGroupBudgetDataSchema';
import { FrostedGlass } from '@vanguard/FrostedGlass/FrostedGlass';
import React from 'react';

import Trigger from './images/trigger.svg';

export type CampaignUpsellingTriggerProps = { adGroupBudget: GaAdGroupBudgetDataSchema };

export const CampaignUpsellingTrigger = (props: CampaignUpsellingTriggerProps) => {
  const { adGroupBudget } = props;

  if (!adGroupBudget.upgrade?.available) {
    return null;
  }

  return (
    <FrostedGlass testId={'CampaignUpsellingTrigger_TestId'}>
      <PageSectionRecommended
        title={['Get more engagement and increase your budget']}
        description={
          'Increase your budget by upgrading to <b>%productName%</b>. With a higher budget, your ads will be displayed and clicked more often and you will get more visitors on your website.'
        }
        replacements={{ productName: adGroupBudget.upgrade.productName ?? '' }}
        imageUrl={Trigger}
        hasBadge={true}
        buttonText={'Learn more'}
        onClick={() => {
          location.href = adGroupBudget.upgrade?.upgradeLink ?? '#';
        }}
      />
    </FrostedGlass>
  );
};
