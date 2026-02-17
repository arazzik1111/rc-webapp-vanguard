import { Story, testOptions } from "./_SearchableSelect.default";
import { SearchableSelect } from "../SearchableSelect";
import { within, expect } from "storybook/test";

export const WithElementName: Story = {
  render: () => <SearchableSelect options={testOptions} elementName="domain" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByTestId("vanguard-searchable-select-input");

    await expect(select).toBeInTheDocument();
  },
};