import { fireEvent, getByTestId, screen, within } from '@testing-library/react';
import { InfoBox } from '@vanguard/InfoBox/InfoBox';
import React from 'react';

import { render } from '../../../test-utils/test-utils';

describe('InfoBox tests', () => {
  test('should render title', async () => {
    const title = 'Test Title';
    render(
      <InfoBox
        title={title}
        description={
          'Google My Business restricts description editing for lodging locations (such as hotels). However, you can still edit and publish it in the other directories.'
        }
      />,
    );

    const titleEl = await screen.findByTestId('info-box-title');
    expect(titleEl.innerHTML).toBe(title);
  });

  test('should render description', async () => {
    const description =
      'Google My Business restricts description editing for lodging locations (such as hotels). However, you can still edit and publish it in the other directories.';
    render(<InfoBox description={description} />);

    const descriptionEl = await screen.findByTestId('info-box-description');
    expect(descriptionEl.innerHTML).toBe(description);
  });

  test('should render max width', async () => {
    const description =
      'Google My Business restricts description editing for lodging locations (such as hotels). However, you can still edit and publish it in the other directories.';
    const maxWidth = '300px';
    render(<InfoBox description={description} maxWidth={maxWidth} />);

    const contentEl = await screen.findByTestId('info-box-content');
    expect(contentEl).toHaveStyle(`max-width: ${maxWidth}`);
  });

  test('should render dismissible', async () => {
    const description =
      'Google My Business restricts description editing for lodging locations (such as hotels). However, you can still edit and publish it in the other directories.';
    const dismissible = true;
    render(<InfoBox description={description} dismissible={dismissible} />);

    const contentEl = await screen.findByTestId('info-box-content');
    expect(contentEl).toBeInTheDocument();
  });

  test('that callback works', () => {
    let toBeChanged = null;
    const { container } = render(
      <InfoBox
        description={
          'Google My Business restricts description editing for lodging locations (such as hotels). However, you can still edit and publish it in the other directories.'
        }
        dismissible={true}
        dismissCallback={() => {
          toBeChanged = 'changed';
        }}
      />,
    );
    fireEvent(
      getByTestId(container, 'info-box-cta'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(toBeChanged).toEqual('changed');
  });

  test('should render type danger', async () => {
    const description =
      'Google My Business restricts description editing for lodging locations (such as hotels). However, you can still edit and publish it in the other directories.';
    render(<InfoBox type={'danger'} description={description} />);

    const lineAlertIconEl = await screen.findByTestId('info-box-icon');

    const svg = within(lineAlertIconEl).getByTestId('info-box-icon-svg');
    expect(svg).toHaveAttribute('color', 'var(--e500)');
  });

  test('should render type warn', async () => {
    const description =
      'Google My Business restricts description editing for lodging locations (such as hotels). However, you can still edit and publish it in the other directories.';
    render(<InfoBox type={'warn'} description={description} />);

    const lineAlertIconEl = await screen.findByTestId('info-box-icon');

    const svg = within(lineAlertIconEl).getByTestId('info-box-icon-svg');
    expect(svg).toHaveAttribute('color', 'var(--w500)');
  });

  test('should render type success', async () => {
    const description =
      'Google My Business restricts description editing for lodging locations (such as hotels). However, you can still edit and publish it in the other directories.';
    render(<InfoBox type={'success'} description={description} />);

    const lineAlertIconEl = await screen.findByTestId('info-box-icon');

    const svg = within(lineAlertIconEl).getByTestId('info-box-icon-svg');
    expect(svg).toHaveAttribute('color', 'var(--s500)');
  });

  test('should render type info', async () => {
    const description =
      'Google My Business restricts description editing for lodging locations (such as hotels). However, you can still edit and publish it in the other directories.';
    render(<InfoBox type={'info'} description={description} />);

    const lineAlertIconEl = await screen.findByTestId('info-box-icon');

    const svg = within(lineAlertIconEl).getByTestId('info-box-icon-svg');
    expect(svg).toHaveAttribute('color', 'var(--p500)');
  });
});
