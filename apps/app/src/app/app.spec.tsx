import { render, screen } from '@testing-library/react';
import DatePicker from './DatePicker';
import App from './app';
import '@testing-library/jest-dom';

jest.mock('./Datepicker');

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(screen.getByText('MY TO DOs')).toBeInTheDocument();
    expect(DatePicker).toHaveBeenCalled();
  });
});
