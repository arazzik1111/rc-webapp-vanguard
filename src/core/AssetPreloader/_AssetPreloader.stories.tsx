
import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { AssetPreloader } from "./AssetPreloader";
import { Story } from "./stories/_AssetPreloader.default";
import { Default as _Default } from "./stories/Default.story";
import { WithIcons as _WithIcons } from "./stories/WithIcons.story";
import { WithAvatars as _WithAvatars } from "./stories/WithAvatars.story";
import { WithImages as _WithImages } from "./stories/WithImages.story";
import { WithAll as _WithAll } from "./stories/WithAll.story";

export const Default: Story = { ..._Default };
export const WithIcons: Story = { ..._WithIcons };
export const WithAvatars: Story = { ..._WithAvatars };
export const WithImages: Story = { ..._WithImages };
export const WithAll: Story = { ..._WithAll };

export default {
  ...SbDecorator({
    title: "vanguard/AssetPreloader",
    component: AssetPreloader,
  }),
};
