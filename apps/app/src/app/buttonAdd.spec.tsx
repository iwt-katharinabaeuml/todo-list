import ButtonAdd from './ButtonAdd';
import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import '@testing-library/jest-dom';
global.React = React;

it('render ButtonAdd', () => {
  render(<ButtonAdd />);
  const buttonAdd = screen.getByRole('button');
  expect(buttonAdd).toHaveTextContent('ADD');
});
