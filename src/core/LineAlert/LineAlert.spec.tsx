import { screen, within } from '@testing-library/react';
import { LineAlert } from '@vanguard/LineAlert/LineAlert';
import React from 'react';

import { render } from '../../../test-utils/test-utils';

describe('Line Alert tests', () => {
  test('should render children', async () => {
    render(<LineAlert type={'danger'}>Child</LineAlert>);

    const textEl = await screen.findByText('Child');
    expect(textEl.innerHTML).toBe('Child');
  });

  test('should render type danger', async () => {
    render(<LineAlert type={'danger'}>Child</LineAlert>);

    const lineAlertIconEl = await screen.findByTestId('line-alert-icon');

    const svg = within(lineAlertIconEl).getByTestId('line-alert-icon-svg');
    expect(svg).toHaveAttribute('color', 'var(--e500)');
  });

  test('should render type info', async () => {
    render(<LineAlert type={'info'}>Child</LineAlert>);

    const lineAlertIconEl = await screen.findByTestId('line-alert-icon');

    const svg = within(lineAlertIconEl).getByTestId('line-alert-icon-svg');
    expect(svg).toHaveAttribute('color', 'var(--i500)');
  });

  test('should render type warning', async () => {
    render(<LineAlert type={'warning'}>Child</LineAlert>);

    const lineAlertIconEl = await screen.findByTestId('line-alert-icon');

    const svg = within(lineAlertIconEl).getByTestId('line-alert-icon-svg');
    expect(svg).toHaveAttribute('color', 'var(--w500)');
  });

  test('should render type success', async () => {
    render(<LineAlert type={'success'}>Child</LineAlert>);

    const lineAlertIconEl = await screen.findByTestId('line-alert-icon');

    const svg = within(lineAlertIconEl).getByTestId('line-alert-icon-svg');
    expect(svg).toHaveAttribute('color', 'var(--s500)');
  });
});
