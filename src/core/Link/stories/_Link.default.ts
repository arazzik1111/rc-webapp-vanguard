import { StoryObj } from '@storybook/react';

import { Link } from '../Link';

export type Story = StoryObj<typeof Link>;

export const testLinkText = 'Click me';
export const testHref = 'https://example.com';
export const testOnClick = () => alert('Link clicked!');
