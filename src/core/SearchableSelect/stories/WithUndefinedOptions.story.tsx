import { Story, testOptionsWithUndefinedItems } from './_SearchableSelect.default';
import { SearchableSelect } from "../SearchableSelect";
import { within, expect } from "storybook/test";

export const WithUndefinedOptions: Story = {
  render: () => <SearchableSelect options={testOptionsWithUndefinedItems} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByTestId("vanguard-searchable-select-input");

    await expect(select).toBeInTheDocument();
  },
};