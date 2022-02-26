import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import { Demo } from '../lib'

export default {
  title: 'Demo',
  component: Demo,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export function BasicDemo () {
  return (
    <Demo />
  )
}