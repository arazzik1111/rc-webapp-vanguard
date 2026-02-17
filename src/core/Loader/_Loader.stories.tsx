import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { Loader } from "./Loader";
import { Story } from "./stories/_Loader.default";
import { Loading as _Loading } from "./stories/Loading.story";
import { NotLoading as _NotLoading } from "./stories/NotLoading.story";
import { InContainer as _InContainer } from "./stories/InContainer.story";

export const Loading: Story = { ..._Loading };
export const NotLoading: Story = { ..._NotLoading };
export const InContainer: Story = { ..._InContainer };

export default {
  ...SbDecorator({
    title: "Vanguard/Loader",
    component: Loader,
    extra: {
      args: {
        testId: "loader",
      },
    },
  }),
};