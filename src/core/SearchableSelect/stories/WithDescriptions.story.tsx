import { Story, testOptionsWithDescriptions } from "./_SearchableSelect.default";
import { SearchableSelect } from "../SearchableSelect";
import { within, expect } from "storybook/test";

export const WithDescriptions: Story = {
  render: () => <SearchableSelect options={testOptionsWithDescriptions} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByTestId("vanguard-searchable-select-input");

    await expect(select).toBeInTheDocument();
  },
};