import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { PhotoCarouselModal } from "./PhotoCarouselModal";
import { Story } from "./stories/_PhotoCarouselModal.default";
import { Default as _Default } from "./stories/Default.story";
import { SingleImage as _SingleImage } from "./stories/SingleImage.story";
import { WithDefaultItem as _WithDefaultItem } from "./stories/WithDefaultItem.story";

export const Default: Story = { ..._Default };
export const SingleImage: Story = { ..._SingleImage };
export const WithDefaultItem: Story = { ..._WithDefaultItem };

export default {
  ...SbDecorator({
    title: "vanguard/PhotoCarouselModal",
    component: PhotoCarouselModal,
    opts: {
      wrapInModal: false,
    },
  }),
};