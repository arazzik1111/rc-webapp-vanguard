import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { Text } from "@vanguard/Text/Text";
import { TEXT_STORY_CONTROLS, Story } from "./stories/_Text.default";
import { TextStandard as _TextStandard } from "./stories/TextStandard.story";
import { TextWithEm as _TextWithEm } from "./stories/TextWithEm.story";
import { TextWithMark as _TextWithMark } from "./stories/TextWithMark.story";
import { TextWithBold as _TextWithBold } from "./stories/TextWithBold.story";
import { TextWithBoldAndEm as _TextWithBoldAndEm } from "./stories/TextWithBoldAndEm.story";
import { TextLong as _TextLong } from "./stories/TextLong.story";
import { TextBasic as _TextBasic } from "./stories/TextBasic.story";

export const TextStandard: Story = { ..._TextStandard };
export const TextWithEm: Story = { ..._TextWithEm };
export const TextWithMark: Story = { ..._TextWithMark };
export const TextWithBold: Story = { ..._TextWithBold };
export const TextWithBoldAndEm: Story = { ..._TextWithBoldAndEm };
export const TextLong: Story = { ..._TextLong };
export const TextBasic: Story = { ..._TextBasic };

export default {
  ...SbDecorator({
    title: "Vanguard/Text Basic",
    component: Text,
    extra: TEXT_STORY_CONTROLS,
  }),
};
