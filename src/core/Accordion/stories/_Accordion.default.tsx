import { p2, p4 } from '@globalStyles';
import { classNames } from '@helpers/classNames';
import { StoryObj } from '@storybook/react';

import { Accordion } from '../Accordion';

export type Story = StoryObj<typeof Accordion>;

export const DETAILS_TEXT = 'This is the details';
export const TITLE_TEXT = 'This is the title';

export const Title = () => {
  return <div className={classNames(p2)}>{TITLE_TEXT}</div>;
};

export const Details = () => {
  return <div className={classNames(p4)}>{DETAILS_TEXT}</div>;
};

export const defaultProps = {
  summaryChildren: <Title />,
  detailsChildren: <Details />,
  accordionId: '12',
};
