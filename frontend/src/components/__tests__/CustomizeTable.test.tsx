
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import CustomizeTable from '../CustomizeTable';

// Import jest-dom matchers
import '@testing-library/jest-dom';

describe('CustomizeTable Component', () => {
  beforeEach(() => {
    // Clear localStorage and reset styles before each test
    localStorage.clear();
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
  });

  it('renders without crashing', () => {
    render(<CustomizeTable />);
    expect(screen.getByLabelText(/Choose Color Scheme/i)).toBeInTheDocument();
  });

  it('applies the default color scheme on initial load', () => {
    render(<CustomizeTable />);
    // Assuming the default is 'light', check for light scheme styles
    expect(document.body.style.backgroundColor).toBe('rgb(255, 255, 255)'); // #fff
    expect(document.body.style.color).toBe('rgb(0, 0, 0)'); // #000
  });

  it('changes color scheme when selection changes', () => {
    render(<CustomizeTable />);
    const select = screen.getByLabelText(/Choose Color Scheme/i);

    // Change to dark mode
    act(() => {
      fireEvent.change(select, { target: { value: 'dark' } });
    });

    // Check if the styles have been updated
    expect(document.body.style.backgroundColor).toBe('rgb(51, 51, 51)'); // #333
    expect(document.body.style.color).toBe('rgb(255, 255, 255)'); // #fff

    // Change back to light mode
    act(() => {
      fireEvent.change(select, { target: { value: 'light' } });
    });

    expect(document.body.style.backgroundColor).toBe('rgb(255, 255, 255)'); // #fff
    expect(document.body.style.color).toBe('rgb(0, 0, 0)'); // #000
  });

  it('saves the color scheme to localStorage', () => {
    render(<CustomizeTable />);
    const select = screen.getByLabelText(/Choose Color Scheme/i);

    act(() => {
      fireEvent.change(select, { target: { value: 'dark' } });
    });
    expect(localStorage.getItem('colorScheme')).toBe('dark');

    act(() => {
      fireEvent.change(select, { target: { value: 'light' } });
    });
    expect(localStorage.getItem('colorScheme')).toBe('light');
  });
});
