import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { Text } from "@vanguard/Text/Text";
import { TEXT_STORY_CONTROLS, Story } from "./stories/_Text.default";
import { CaptionBalanced as _CaptionBalanced } from "./stories/CaptionBalanced.story";
import { TextBasicBalanced as _TextBasicBalanced } from "./stories/TextBasicBalanced.story";
import { HelpBalanced as _HelpBalanced } from "./stories/HelpBalanced.story";
import { IntroBalanced as _IntroBalanced } from "./stories/IntroBalanced.story";
import { Heading4Balanced as _Heading4Balanced } from "./stories/Heading4Balanced.story";
import { Heading3Balanced as _Heading3Balanced } from "./stories/Heading3Balanced.story";
import { Heading2Balanced as _Heading2Balanced } from "./stories/Heading2Balanced.story";
import { Heading1Balanced as _Heading1Balanced } from "./stories/Heading1Balanced.story";
import { Display2Balanced as _Display2Balanced } from "./stories/Display2Balanced.story";
import { Display1Balanced as _Display1Balanced } from "./stories/Display1Balanced.story";

export const CaptionBalanced: Story = { ..._CaptionBalanced };
export const TextBasicBalanced: Story = { ..._TextBasicBalanced };
export const HelpBalanced: Story = { ..._HelpBalanced };
export const IntroBalanced: Story = { ..._IntroBalanced };
export const Heading4Balanced: Story = { ..._Heading4Balanced };
export const Heading3Balanced: Story = { ..._Heading3Balanced };
export const Heading2Balanced: Story = { ..._Heading2Balanced };
export const Heading1Balanced: Story = { ..._Heading1Balanced };
export const Display2Balanced: Story = { ..._Display2Balanced };
export const Display1Balanced: Story = { ..._Display1Balanced };

export default {
  ...SbDecorator({
    title: "Vanguard/Text Balanced",
    component: Text,
    extra: TEXT_STORY_CONTROLS,
  }),
};
