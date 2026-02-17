import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { avatarCheckBoxStore } from "./bootstrap/AvatarCheckBox.slice";
import { AvatarCheckbox } from "../AvatarCheckbox";
import { Story } from "./_AvatarCheckbox.default";
import { Default as _Default } from "./Default.story";
import { InitiallyCheckedClickCheckbox as _InitiallyCheckedClickCheckbox } from "./InitiallyCheckedClickCheckbox.story";
import { InitiallyCheckedClickAvatar as _InitiallyCheckedClickAvatar } from "./InitiallyCheckedClickAvatar.story";
import { InitiallyCheckedClickAvatarParent as _InitiallyCheckedClickAvatarParent } from "./InitiallyCheckedClickAvatarParent.story";
import { WithInstagramIcon as _WithInstagramIcon } from "./WithInstagramIcon.story";
import { Disabled as _Disabled } from "./Disabled.story";
import { WithRedux as _WithRedux } from "./WithRedux.story";
import { WithImage as _WithImage } from "./WithImage.story";
import { WithReplacements as _WithReplacements } from "./WithReplacements.story";

export const Default: Story = { ..._Default };
export const InitiallyCheckedClickCheckbox: Story = { ..._InitiallyCheckedClickCheckbox };
export const InitiallyCheckedClickAvatar: Story = { ..._InitiallyCheckedClickAvatar };
export const InitiallyCheckedClickAvatarParent: Story = { ..._InitiallyCheckedClickAvatarParent };
export const WithInstagramIcon: Story = { ..._WithInstagramIcon };
export const Disabled: Story = { ..._Disabled };
export const WithRedux: Story = { ..._WithRedux };
export const WithImage: Story = { ..._WithImage };
export const WithReplacements: Story = { ..._WithReplacements };

export default {
  ...SbDecorator({
    title: "vanguard/AvatarCheckbox",
    component: AvatarCheckbox,
    opts: {
      customStore: avatarCheckBoxStore,
    },
  }),
};
