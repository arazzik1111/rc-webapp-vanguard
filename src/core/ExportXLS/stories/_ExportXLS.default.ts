import { StoryObj } from '@storybook/react';

import { ExportXLS } from '../ExportXLS';

export type Story = StoryObj<typeof ExportXLS>;

export const sampleRows = [
  { name: 'Johnson', salary: 30000, sex: 'Male' },
  { name: 'Monika', salary: 355000, sex: 'Female' },
  { name: 'Konstantina', salary: 20000, sex: 'Female' },
  { name: 'John', salary: 250000, sex: 'Male' },
  { name: 'Josef', salary: 450500, sex: 'Male' },
];

export const customFileName = 'custom_export';

export const customButtonText = 'Download Data';
