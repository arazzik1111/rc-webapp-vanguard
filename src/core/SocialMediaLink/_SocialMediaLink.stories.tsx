import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { SocialMediaLink } from "./SocialMediaLink";
import { Story } from "./stories/_SocialMediaLink.default";
import { Facebook as _Facebook } from "./stories/Facebook.story";
import { Instagram as _Instagram } from "./stories/Instagram.story";
import { YouTube as _YouTube } from "./stories/YouTube.story";
import { LinkedIn as _LinkedIn } from "./stories/LinkedIn.story";
import { Pinterest as _Pinterest } from "./stories/Pinterest.story";
import { TikTok as _TikTok } from "./stories/TikTok.story";
import { Twitter as _Twitter } from "./stories/Twitter.story";
import { MultipleLinks as _MultipleLinks } from "./stories/MultipleLinks.story";
import { AutoDetectNetwork as _AutoDetectNetwork } from "./stories/AutoDetectNetwork.story";
import { GreyScale as _GreyScale } from "./stories/GreyScale.story";
import { AllGreyScale as _AllGreyScale } from "./stories/AllGreyScale.story";
import { MixedGrayscale as _MixedGrayscale } from "./stories/MixedGrayscale.story";

export const Facebook: Story = { ..._Facebook };
export const Instagram: Story = { ..._Instagram };
export const YouTube: Story = { ..._YouTube };
export const LinkedIn: Story = { ..._LinkedIn };
export const Pinterest: Story = { ..._Pinterest };
export const TikTok: Story = { ..._TikTok };
export const Twitter: Story = { ..._Twitter };
export const MultipleLinks: Story = { ..._MultipleLinks };
export const AutoDetectNetwork: Story = { ..._AutoDetectNetwork };
export const GreyScale: Story = { ..._GreyScale };
export const AllGreyScale: Story = { ..._AllGreyScale };
export const MixedGrayscale: Story = { ..._MixedGrayscale };

export default {
  ...SbDecorator({
    title: "Vanguard/SocialMediaLink",
    component: SocialMediaLink,
  }),
};