import { Story, testOptions } from './_SearchableSelect.default';
import { SearchableSelect } from '../SearchableSelect';
import { expect, within } from 'storybook/test';
import { IconNames } from '@vanguard/Icon/IconNames.ts';

export const WithStartAdornment: Story = {
  render: () => (
    <SearchableSelect
      options={testOptions}
      startAdornment={{ color: '--p500', icon: IconNames.search }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByTestId('vanguard-searchable-select-input');

    await expect(select).toBeInTheDocument();
  },
};