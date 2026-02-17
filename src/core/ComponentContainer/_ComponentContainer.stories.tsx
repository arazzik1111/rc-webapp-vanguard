import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { ComponentContainer } from "./ComponentContainer";
import { Story } from "./stories/_ComponentContainer.default";
import { Default as _Default } from "./stories/Default.story";
import { WithClassName as _WithClassName } from "./stories/WithClassName.story";
import { WithClickHandler as _WithClickHandler } from "./stories/WithClickHandler.story";
import { WithCustomStyle as _WithCustomStyle } from "./stories/WithCustomStyle.story";
import { WithRole as _WithRole } from "./stories/WithRole.story";
import { WithId as _WithId } from "./stories/WithId.story";
import { WithRef as _WithRef } from "./stories/WithRef.story";

export const Default: Story = { ..._Default };
export const WithClassName: Story = { ..._WithClassName };
export const WithClickHandler: Story = { ..._WithClickHandler };
export const WithCustomStyle: Story = { ..._WithCustomStyle };
export const WithRole: Story = { ..._WithRole };
export const WithId: Story = { ..._WithId };
export const WithRef: Story = { ..._WithRef };

export default {
  ...SbDecorator({
    title: "Vanguard/ComponentContainer",
    component: ComponentContainer,
    extra: {
      args: {
        testId: "component-container",
        children: "Default content",
      },
    },
  }),
};