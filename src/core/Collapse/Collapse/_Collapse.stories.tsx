import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { Collapse } from "./Collapse";
import { Story } from "./stories/_Collapse.default";
import { Default as _Default } from "./stories/Default.story";
import { Closed as _Closed } from "./stories/Closed.story";
import { Horizontal as _Horizontal } from "./stories/Horizontal.story";
import { WithClassName as _WithClassName } from "./stories/WithClassName.story";

export const Default: Story = { ..._Default };
export const Closed: Story = { ..._Closed };
export const Horizontal: Story = { ..._Horizontal };
export const WithClassName: Story = { ..._WithClassName };

export default {
  ...SbDecorator({
    title: "Vanguard/Collapse",
    component: Collapse,
  }),
};

