import { SbDecorator } from '@test-utils/get-storybook-decorator';
import { VideoPlayer } from './VideoPlayer';
import { Story } from './stories/_VideoPlayer.default';
import { Default as _Default } from './stories/Default.story';
import { WithFallback as _WithFallback } from './stories/WithFallback.story';
import { WithTracks as _WithTracks } from './stories/WithTracks.story';
import { WithService as _WithService } from './stories/WithService.story';
import { WithServiceAndFallback as _WithServiceAndFallback } from './stories/WithServiceAndFallback.story';

export const Default: Story = { ..._Default };
export const WithFallback: Story = { ..._WithFallback };
export const WithTracks: Story = { ..._WithTracks };
export const WithService: Story = { ..._WithService };

export const WithServiceAndFallback: Story = { ..._WithServiceAndFallback };

export default {
  ...SbDecorator({
    title: 'Vanguard/VideoPlayer',
    component: VideoPlayer,
  }),
};