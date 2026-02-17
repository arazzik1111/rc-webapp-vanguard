import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { FrostedGlass } from "./FrostedGlass";
import { Story } from "./stories/_FrostedGlass.default";
import { Default as _Default } from "./stories/Default.story";
import { WithClassName as _WithClassName } from "./stories/WithClassName.story";
import { WithOnClick as _WithOnClick } from "./stories/WithOnClick.story";
import { WithStyle as _WithStyle } from "./stories/WithStyle.story";
import { WithTestId as _WithTestId } from "./stories/WithTestId.story";
import { WithId as _WithId } from "./stories/WithId.story";
import { WithRole as _WithRole } from "./stories/WithRole.story";
import { MultipleSections as _MultipleSections } from "./stories/MultipleSections.story";

export default {
  ...SbDecorator({
    title: "Vanguard/FrostedGlass",
    component: FrostedGlass,
  }),
};

export const Default: Story = { ..._Default };
export const WithClassName: Story = { ..._WithClassName };
export const WithOnClick: Story = { ..._WithOnClick };
export const WithStyle: Story = { ..._WithStyle };
export const WithTestId: Story = { ..._WithTestId };
export const WithId: Story = { ..._WithId };
export const WithRole: Story = { ..._WithRole };
export const MultipleSections: Story = { ..._MultipleSections };