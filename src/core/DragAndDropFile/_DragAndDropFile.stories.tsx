
import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { DragAndDropFile } from "./DragAndDropFile";
import { Story } from "./stories/_DragAndDropFile.default";
import { Default as _Default } from "./stories/Default.story";

export const Default: Story = { ..._Default };

export default {
  ...SbDecorator({
    title: "Vanguard/DragAndDropFile",
    component: DragAndDropFile,
  }),
};

