import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { mapStorybookActionToProps } from "@test-utils/map-storybook-action-to-props";
import {
  Select,
  SelectOptionProp,
  SelectOptionProps,
  SelectOptionsComponentProps,
  SelectProps,
} from "@vanguard/Select/Select";
import { StoryObj } from "@storybook/react";
import { Icon } from "@vanguard/Icon/Icon";
import { IconNames } from "@vanguard/Icon/IconNames";

export default {
  ...SbDecorator({
    title: "vanguard/Select",
    component: Select,
    extra: {
      ...disableControls([""]),
    },
    opts: {
      withRedux: true,
      maxWidth: "250px",
    },
  }),
};

const options: SelectOptionProp[] = [
  {
    key: 1,
    value: "option1",
    title: "Option 1 Title",
    description: "This is a short description.",
    disabled: false,
  },
  {
    key: 2,
    value: "option2",
    title: "Option 2 Long Title",
    description: "Description with at least 40 characters to fulfill the requirement.",
    disabled: true,
  },
  {
    key: "three",
    value: 3,
    title: "Option 3 Title",
    disabled: false,
  },
  {
    key: 4,
    value: "option4",
    title: "Option 4 Longer Title",
    description: "Long description with more than 40 characters to meet the requirement.",
    disabled: true,
  },
  {
    key: "five",
    value: 5,
    title: "Option 5 Very Very Long Title",
    description: "Description with more than 40 characters to fulfill the requirement.",
    disabled: false,
  },
  {
    key: 6,
    value: "option6",
    title: "Option 6 Medium Title",
    disabled: true,
  },
  {
    key: "seven",
    value: 7,
    title: "Option 7 Short",
    description: "This is another short description.",
    disabled: false,
  },
];

type Story = StoryObj<typeof Select>;

export const SelectStory: Story = {
  args: {
    options,
  },
};
export const SelectStoryWithTileOverDescription: Story = {
  args: {
    options,
    descriptionUnderTitle: true,
    value: "option6",
  },
};
export const SelectStoryWithEllipsis: Story = {
  args: {
    options,
    descriptionUnderTitle: true,
    value: "option6",
    ellipsis: true,
  },
};

export const SelectStoryWithEllipsisAndWidthConstraint: Story = {
  args: {
    options,
    descriptionUnderTitle: true,
    value: "option6",
    ellipsis: true,
    containToSelectWidth: true,
  },
};

const CustomComponent = (props: SelectOptionsComponentProps) => {
  const { title, value, disabled, description, className, leftImageUrl, selectedItem } = props;

  return (
    <div style={{ border: "5px solid red" }}>
      {title}-{value}
    </div>
  );
};
export const SelectStoryWithCustomComponent: Story = {
  args: {
    options,
    descriptionUnderTitle: true,
    value: "option6",
    ellipsis: true,
    containToSelectWidth: true,
    customOptionsRenderer: CustomComponent,
  },
};

export const SelectWithInputAdornment: Story = {
  args: {
    options,
    descriptionUnderTitle: true,
    value: "option6",
    ellipsis: true,
    containToSelectWidth: true,
    adornment: options.map((x) => <Icon>{IconNames.message}</Icon>),
  },
};

export const SelectWithCustomInputRenderer: Story = {
  args: {
    options,
    descriptionUnderTitle: true,
    value: "option6",
    ellipsis: true,
    containToSelectWidth: true,
    customInputRenderer: (props) => {
      return <div>{props.value} CUSTOM</div>;
    },
  },
};
