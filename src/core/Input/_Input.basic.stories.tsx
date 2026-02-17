import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import React from "react";
import { StoryObj } from "@storybook/react-vite";
import { Input } from "@vanguard/Input/Input";
import { INPUT_STORY_CONTROLS } from "@vanguard/Input/stories/shared/constants";

export default {
  ...SbDecorator({
    title: "Vanguard/Input",
    component: Input,
    extra: {
      ...INPUT_STORY_CONTROLS,
    },
    opts: {
      withRedux: true,
    },
  }),
};

type Story = StoryObj<typeof Input>;

export const SimpleInput: Story = {};
//
// export const InputStory = (props: InputProps) => {
//   return (
//     <>
//       <Input {...props} />
//     </>
//   );
// };
//
// export const NumberInput = (props: InputProps) => {
//   return (
//     <>
//       <Input type={"number"} {...props} label={"Test"} />
//     </>
//   );
// };
//
// export const LoadingInput = (props: InputProps) => {
//   return (
//     <>
//       <Input required={true} label={""} isLoading={true} loadingText={"Generating"} />
//     </>
//   );
// };

export const DisabledInput: Story = {
  args: {
    placeholder: "",
    required: true,
    disabled: true,
  },
};

export const WithPlaceholderInput: Story = {
  args: {
    placeholder: "Test placeholder",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Test label",
    required: true,
  },
};

export const WithLongLabel: Story = {
  args: {
    label: "This is a very long label that should wrap to the next line if it exceeds the width of the input field",
    required: true,
  },
};
