import React from 'react';
import { render, screen } from '@testing-library/react';
import Inputfield from './Inputfield';

import '@testing-library/jest-dom';
global.React = React;


it('renders Inputfield', () => {
    render(<Inputfield />);
    expect(screen.getByPlaceholderText('new To Do')).toBeInTheDocument();
  });