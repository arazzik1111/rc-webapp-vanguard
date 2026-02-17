import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { Accordion } from "@vanguard/Accordion/Accordion";
import { Story } from "./stories/_Accordion.default.tsx";
import { Default as _Default } from "./stories/Default.story";
import { ShouldOpen as _ShouldOpen } from "./stories/ShouldOpen.story";
import { ShouldClose as _ShouldClose } from "./stories/ShouldClose.story";
import { WithReverse as _WithReverse } from "./stories/WithReverse.story";
import { WithCustomIcon as _WithCustomIcon } from "./stories/WithCustomIcon.story";
import { WithCustomStyles as _WithCustomStyles } from "./stories/WithCustomStyles.story";
import { ControlledExpanded as _ControlledExpanded } from "./stories/ControlledExpanded.story";
import { WithOnExpandedChange as _WithOnExpandedChange } from "./stories/WithOnExpandedChange.story";
import { WithoutSummaryChildren as _WithoutSummaryChildren } from "./stories/WithoutSummaryChildren.story";
import { WithMuiProps as _WithMuiProps } from "./stories/WithMuiProps.story";
import { ExpandedEffect as _ExpandedEffect } from "./stories/ExpandedEffect.story";

export const Default: Story = { ..._Default };
export const ShouldOpen: Story = { ..._ShouldOpen };
export const ShouldClose: Story = { ..._ShouldClose };
export const WithReverse: Story = { ..._WithReverse };
export const WithCustomIcon: Story = { ..._WithCustomIcon };
export const WithCustomStyles: Story = { ..._WithCustomStyles };
export const ControlledExpanded: Story = { ..._ControlledExpanded };
export const WithOnExpandedChange: Story = { ..._WithOnExpandedChange };
export const WithoutSummaryChildren: Story = { ..._WithoutSummaryChildren };
export const WithMuiProps: Story = { ..._WithMuiProps };
export const ExpandedEffect: Story = { ..._ExpandedEffect };

export default {
  ...SbDecorator({
    title: "vanguard/Accordion",
    component: Accordion,
    extra: {
      argTypes: {
        ...disableControls([
          "testId",
          "onExpandedChange",
          "className",
          "children",
          "type",
          "fontWeight",
          "color",
          "replacements",
          "accordionId",
          "summaryChildren",
          "detailsChildren",
          "iconSize",
          "iconName",
          "summaryCustomStyle",
          "baseCustomStyle",
          "detailsCustomStyle",
          "accordionId",
        ]),
      },
    },
  }),
};
