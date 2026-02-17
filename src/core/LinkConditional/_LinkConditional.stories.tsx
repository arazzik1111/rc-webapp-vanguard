import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { LinkConditional } from "./LinkConditional";
import { Story } from "./stories/_LinkConditional.default.tsx";
import { Default as _Default } from "./stories/Default.story";
import { WithChildVisible as _WithChildVisible } from "./stories/WithChildVisible.story";
import { WithChildFullWidth as _WithChildFullWidth } from "./stories/WithChildFullWidth.story";
import { WithLinkProps as _WithLinkProps } from "./stories/WithLinkProps.story";

export const Default: Story = { ..._Default };
export const WithChildVisible: Story = { ..._WithChildVisible };
export const WithChildFullWidth: Story = { ..._WithChildFullWidth };
export const WithLinkProps: Story = { ..._WithLinkProps };

export default {
  ...SbDecorator({
    title: "vanguard/LinkConditional",
    component: LinkConditional,
  }),
};
