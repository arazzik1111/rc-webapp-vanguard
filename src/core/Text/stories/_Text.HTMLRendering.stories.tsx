import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { Text } from "@vanguard/Text/Text";
import { TEXT_STORY_CONTROLS, Story } from "./stories/_Text.default";
import { WithoutTranslate as _WithoutTranslate } from "./stories/WithoutTranslate.story";
import { WithTranslate as _WithTranslate } from "./stories/WithTranslate.story";
import { WithSeeMore as _WithSeeMore } from "./stories/WithSeeMore.story";
import { WithAnimateWords as _WithAnimateWords } from "./stories/WithAnimateWords.story";
import { WithNewLines as _WithNewLines } from "./stories/WithNewLines.story";
import { WithAllowNewLines as _WithAllowNewLines } from "./stories/WithAllowNewLines.story";
import { WithSeeMoreObject as _WithSeeMoreObject } from "./stories/WithSeeMoreObject.story";
import { WithSeeMoreMaxLines as _WithSeeMoreMaxLines } from "./stories/WithSeeMoreMaxLines.story";

export const WithoutTranslate: Story = { ..._WithoutTranslate };
export const WithTranslate: Story = { ..._WithTranslate };
export const WithSeeMore: Story = { ..._WithSeeMore };
export const WithAnimateWords: Story = { ..._WithAnimateWords };
export const WithNewLines: Story = { ..._WithNewLines };
export const WithAllowNewLines: Story = { ..._WithAllowNewLines };
export const WithSeeMoreObject: Story = { ..._WithSeeMoreObject };
export const WithSeeMoreMaxLines: Story = { ..._WithSeeMoreMaxLines };

export default {
  ...SbDecorator({
    title: "Vanguard/Text HTML Rendering",
    component: Text,
    extra: TEXT_STORY_CONTROLS,
  }),
};
