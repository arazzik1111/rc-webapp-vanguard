import { SbDecorator } from '@test-utils/get-storybook-decorator';
import { Drawer } from './Drawer';
import { Story } from './stories/_Drawer.default';
import { Default as _Default } from './stories/Default.story';
import { WithCloseButton as _WithCloseButton } from './stories/WithCloseButton.story';
import { WithZIndex as _WithZIndex } from './stories/WithZIndex.story';
import { WithHideBackdrop as _WithHideBackdrop } from './stories/WithHideBackdrop.story';
import {
  LeftAnchor as _LeftAnchor,
  RightAnchor as _RightAnchor,
  TopAnchor as _TopAnchor,
  BottomAnchor as _BottomAnchor,
} from './stories/Anchors.story';
import { HideBackdrop as _HideBackdrop } from './stories/HideBackdrop.story';
import { Persistent as _Persistent, Temporary as _Temporary } from './stories/Variants.story';
import { WithWideContent as _WithWideContent, WithTallContent as _WithTallContent } from './stories/WideAndTall.story';
import { CompactWithCloseButtonRightAnchor as _CompactWithCloseButtonRightAnchor } from './stories/CompactWithCloseButtonRightAnchor.story';

export const Default: Story = { ..._Default };
export const WithCloseButton: Story = { ..._WithCloseButton };
export const WithZIndex: Story = { ..._WithZIndex };
export const WithHideBackdrop: Story = { ..._WithHideBackdrop };
export const LeftAnchor: Story = { ..._LeftAnchor };
export const RightAnchor: Story = { ..._RightAnchor };
export const TopAnchor: Story = { ..._TopAnchor };
export const BottomAnchor: Story = { ..._BottomAnchor };
export const HideBackdrop: Story = { ..._HideBackdrop };
export const Persistent: Story = { ..._Persistent };
export const Temporary: Story = { ..._Temporary };
export const WithWideContent: Story = { ..._WithWideContent };
export const WithTallContent: Story = { ..._WithTallContent };
export const CompactWithCloseButtonRightAnchor: Story = { ..._CompactWithCloseButtonRightAnchor };

export default {
  ...SbDecorator({
    title: 'Vanguard/Drawer',
    component: Drawer,
  }),
};
