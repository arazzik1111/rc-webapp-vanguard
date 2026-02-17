import { StoryObj } from '@storybook/react';
import { SelectOptionProp } from '@vanguard/Select/Select';

import { SearchableSelect } from '../SearchableSelect';

export type Story = StoryObj<typeof SearchableSelect>;

export const testOptions: SelectOptionProp[] = [
  { key: 'grenierbrasserie.com', value: 'grenierbrasserie.com', title: 'grenierbrasserie.com' },
  { key: 'marvel.com', value: 'marvel.com', title: 'marvel.com' },
  { key: 'vertigo-imprint.com', value: 'vertigo-imprint.com', title: 'vertigo-imprint.com' },
  { key: 'image.com', value: 'image.com', title: 'image.com' },
  { key: 'rankingcoach.com', value: 'rankingcoach.com', title: 'rankingcoach.com' },
];

export const testOptionsWithDescriptions: SelectOptionProp[] = [
  { key: 'domain1', value: 'domain1', title: 'grenierbrasserie.com', description: 'A popular restaurant website' },
  { key: 'domain2', value: 'domain2', title: 'marvel.com', description: 'Marvel Entertainment official site' },
  { key: 'domain3', value: 'domain3', title: 'vertigo-imprint.com', description: 'DC Comics imprint' },
  { key: 'domain4', value: 'domain4', title: 'image.com', description: 'Image hosting service' },
  { key: 'domain5', value: 'domain5', title: 'rankingcoach.com', description: 'SEO tool platform' },
];

export const testOptionsWithUndefinedItems: SelectOptionProp[] = [
  { key: '9980718', value: '9980718', title: 'carshowwindshieldrepair.com' },
  { key: '9980830', value: '9980830', title: 'desertspringsautoglass.com' },
  { key: '9980894', value: '9980894', title: 'earlswindshieldrepair.com' },
  { key: '10149378', value: '10149378', title: 'firstwindshieldrepair.com' },
  { key: '10149506', value: '10149506', title: 'clearmaxwindshields.com' },
  { key: '10150046', value: '10150046', title: 'glassfixautoglass.com' },
  { key: '10150350', value: '10150350', title: 'glassnowglass.com' },
  { key: '10150910', value: '10150910', title: 'glassprowindshields.com' },
  { key: '10151750', value: '10151750', title: 'glasstekautoglass.com' },
  { key: '10153294', value: '10153294', title: 'easystreetautoglass.com' },
  { key: '10153922', value: '10153922', title: 'fasteddieswindshieldrepair.com' },
  { key: '10154226', value: '10154226', title: 'fivespeedautoglass.com' },
  { key: '10154254', value: '10154254', title: 'fixandrepairautoglassshop.com' },
  { key: '10171842', value: '10171842', title: 'flexiblewindshieldrepair.com' },
  { key: '10171846', value: '10171846', title: undefined },
  { key: '13476172', value: '13476172', title: undefined },
];
