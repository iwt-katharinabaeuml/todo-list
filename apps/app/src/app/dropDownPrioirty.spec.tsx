import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import DropDownPriority from './DropDownPriority';
import '@testing-library/jest-dom';
global.React = React;

const sendPriority = jest.fn();
const getRef = jest.fn();

test('should render DropDownPriority', () => {
  render(<App />);
  render(<DropDownPriority sendValue={sendPriority} setPriority={getRef} />);
  expect(sendPriority).toHaveBeenCalledTimes(1);
  expect(getRef).toHaveBeenCalled();
});
