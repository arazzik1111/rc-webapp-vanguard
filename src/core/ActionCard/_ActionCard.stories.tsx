import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { ActionCard } from "./ActionCard";
import { Story } from "./stories/_ActionCard.default.tsx";
import { Default as _Default } from "./stories/Default.story";
import { WithActions as _WithActions } from "./stories/WithActions.story";
import { Transparent as _Transparent } from "./stories/Transparent.story";
import { WithTestId as _WithTestId } from "./stories/WithTestId.story";
import { WithId as _WithId } from "./stories/WithId.story";
import { WithCardBodyStyle as _WithCardBodyStyle } from "./stories/WithCardBodyStyle.story";
import { WithInnerRef as _WithInnerRef } from "./stories/WithInnerRef.story";

export const Default: Story = { ..._Default };
export const WithActions: Story = { ..._WithActions };
export const Transparent: Story = { ..._Transparent };
export const WithTestId: Story = { ..._WithTestId };
export const WithId: Story = { ..._WithId };
export const WithCardBodyStyle: Story = { ..._WithCardBodyStyle };
export const WithInnerRef: Story = { ..._WithInnerRef };

export default {
  ...SbDecorator({
    title: "vanguard/ActionCard",
    component: ActionCard,
  }),
};