import { SbDecorator } from '@test-utils/get-storybook-decorator';
import { baseStore } from '@stores/redux-base.store';
import { RelativeTime } from './RelativeTime';
import description from './RelativeTime.description.md?raw';
import { Story } from './stories/_RelativeTime.default';
import { Default as _Default } from './stories/Default.story';
import { Interactive as _Interactive } from './stories/Interactive.story';
import { PastTimes as _PastTimes } from './stories/PastTimes.story';
import { FutureTimes as _FutureTimes } from './stories/FutureTimes.story';
import { WithTranslate as _WithTranslate } from './stories/WithTranslate.story';

export const Default: Story = { ..._Default };
export const Interactive: Story = { ..._Interactive };
export const PastTimes: Story = { ..._PastTimes };
export const FutureTimes: Story = { ..._FutureTimes };
export const WithTranslate: Story = { ..._WithTranslate };

export default {
  ...SbDecorator({
    title: 'Vanguard/RelativeTime',
    component: RelativeTime,
    opts: {
      customStore: baseStore,
      description: description,
    },
  }),
};
