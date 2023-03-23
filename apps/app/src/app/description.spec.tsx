import React from 'react';
import { render, screen } from '@testing-library/react';
import Description from './description';

import '@testing-library/jest-dom';
global.React = React;

it('renders Inputfield', () => {
  render(<Description sendValue={(value: string) => null} />);
  expect(screen.getByPlaceholderText('new To Do')).toBeInTheDocument();
});
