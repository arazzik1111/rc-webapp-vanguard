import { StoryObj } from '@storybook/react';
import React from 'react';

import { FadedCarousel } from '../FadedCarousel';

export type Story = StoryObj<typeof FadedCarousel>;

export const sampleItems = [
  <div key="1" style={{ border: '1px solid blue', padding: 16, height: 340 }}>
    <span>Item 1</span>
    <br />
    <span>Text text text text.</span>
  </div>,
  <div key="2" style={{ border: '1px solid blue', padding: 16, height: 340 }}>
    <span>Item 2</span>
    <br />
    <span>Text text text text.</span>
  </div>,
  <div key="3" style={{ border: '1px solid blue', padding: 16, height: 340 }}>
    <span>Item 3</span>
    <br />
    <span>Text text text text.</span>
  </div>,
  <div key="4" style={{ border: '1px solid blue', padding: 16, height: 340 }}>
    <span>Item 4</span>
    <br />
    <span>Text text text text.</span>
  </div>,
  <div key="5" style={{ border: '1px solid blue', padding: 16, height: 340 }}>
    <span>Item 5</span>
    <br />
    <span>Text text text text.</span>
  </div>,
  <div key="6" style={{ border: '1px solid blue', padding: 16, height: 340 }}>
    <span>Item 6</span>
    <br />
    <span>Text text text text.</span>
  </div>,
  <div key="7" style={{ border: '1px solid blue', padding: 16, height: 340 }}>
    <span>Item 7</span>
    <br />
    <span>Text text text text.</span>
  </div>,
  <div key="8" style={{ border: '1px solid blue', padding: 16, height: 340 }}>
    <span>Item 8</span>
    <br />
    <span>Text text text text.</span>
  </div>,
];

export const manyItems = [
  ...sampleItems,
  <div key="9" style={{ border: '1px solid blue', padding: 16, height: 340 }}>
    <span>Item 9</span>
    <br />
    <span>Text text text text.</span>
  </div>,
  <div key="10" style={{ border: '1px solid blue', padding: 16, height: 340 }}>
    <span>Item 10</span>
    <br />
    <span>Text text text text.</span>
  </div>,
  <div key="11" style={{ border: '1px solid blue', padding: 16, height: 340 }}>
    <span>Item 11</span>
    <br />
    <span>Text text text text.</span>
  </div>,
];
