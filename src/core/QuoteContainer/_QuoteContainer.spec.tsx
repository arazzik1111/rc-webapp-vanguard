import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { QuoteContainer } from './QuoteContainer';

// Mock the useDynamicImport hook
vi.mock('@custom-hooks/use-dynamic-import/use-dynamic-import', () => ({
  useDynamicImport: vi.fn().mockReturnValue({
    SvgIcon: 'test-svg-path',
    loading: false,
    error: null,
  }),
}));

describe('QuoteContainer', () => {
  it('renders children correctly', () => {
    render(
      <QuoteContainer>
        <div data-testid="test-child">Test Content</div>
      </QuoteContainer>,
    );

    expect(screen.getByTestId('test-child')).toBeTruthy();
    expect(screen.getByText('Test Content')).toBeTruthy();
  });

  it('applies custom className when provided', () => {
    const { container } = render(
      <QuoteContainer className="custom-class">
        <div>Test Content</div>
      </QuoteContainer>,
    );

    const quoteContainer = container.firstChild as HTMLElement;
    expect(quoteContainer.className).toContain('custom-class');
  });
});
