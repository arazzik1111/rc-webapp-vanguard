import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { baseStore } from "@stores/redux-base.store";
import { DocumentUpload } from "./DocumentUpload";
import { Story } from "./stories/_DocumentUpload.default";
import { Default as _Default } from "./stories/Default.story";

export const Default: Story = { ..._Default };

export default {
  ...SbDecorator({
    title: "Vanguard/Documents/DocumentUpload",
    component: DocumentUpload,
    opts: {
      customStore: baseStore,
    },
  }),
};