import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { GallerySummary } from "./GallerySummary";
import { Story } from "./stories/_GallerySummary.default";
import { Default as _Default } from "./stories/Default.story";

export default {
  ...SbDecorator({
    title: "Vanguard/GallerySummary",
    component: GallerySummary,
  }),
};

export const Default: Story = { ..._Default };
