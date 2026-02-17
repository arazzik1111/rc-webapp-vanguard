import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { GoogleMaps } from "./GoogleMaps";
import { Story } from "./stories/_GoogleMaps.default";
import { Default as _Default } from "./stories/Default.story";
import { BlackWhite as _BlackWhite } from "./stories/BlackWhite.story";
import { BlackWhiteNoPoi as _BlackWhiteNoPoi } from "./stories/BlackWhiteNoPoi.story";
import { Coloured as _Coloured } from "./stories/Coloured.story";
import { WithCustomProps as _WithCustomProps } from "./stories/WithCustomProps.story";

export const Default: Story = { ..._Default };
export const BlackWhite: Story = { ..._BlackWhite };
export const BlackWhiteNoPoi: Story = { ..._BlackWhiteNoPoi };
export const Coloured: Story = { ..._Coloured };
export const WithCustomProps: Story = { ..._WithCustomProps };

export default {
  ...SbDecorator({
    title: "Vanguard/GoogleMaps",
    component: GoogleMaps,
  }),
  argTypes: {
    isJsApiLoaded: {
      control: { type: 'boolean' },
      description: 'Whether the Google Maps API is loaded (for external loading).',
    },
  },
  disableControls: ['apiKey'],
};
