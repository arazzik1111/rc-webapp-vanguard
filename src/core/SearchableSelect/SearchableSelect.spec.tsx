import { render } from '@test-utils/test-utils';
import { screen } from '@testing-library/react';
import React from 'react';

import { SearchableSelect } from './SearchableSelect';

describe('SearchableSelect component tests', () => {
  test('should render options length > 5', async () => {
    const options = ['grenierbrasserie.com', 'marvel.com', 'vertigo-imprint.com', 'image.com', 'Option5', 'Option6'];
    render(<SearchableSelect options={options} />);

    const footer = await screen.findByTestId('search-selector-footer-menu');
  });

  test('should render options length > 10', async () => {
    const options = [
      'grenierbrasserie.com',
      'marvel.com',
      'vertigo-imprint.com',
      'image.com',
      'Option5',
      'Option6',
      'Option7',
      'Option8',
      'Option9',
      'Option10',
      'Option11',
    ];
    render(<SearchableSelect options={options} />);

    const inputSerch = await screen.findByTestId('search-select-input-search');
  });

  test('should render default selected option', async () => {
    const options = [
      'grenierbrasserie.com',
      'marvel.com',
      'vertigo-imprint.com',
      'image.com',
      'Option5',
      'Option6',
      'Option7',
      'Option8',
      'Option9',
      'Option10',
      'Option11',
    ];
    render(<SearchableSelect options={options} defaultSelected={'marvel.com'} />);

    const input = await screen.findByTestId('vanguard-searchable-select-input');
    expect(input.children[0].innerHTML).toBe('marvel.com');
  });
});
