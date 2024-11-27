import React from 'react';
import { render, screen } from '@testing-library/react';
import SplashPage from '../splashPage';

describe('SplashPage Component', () => {
  it('renders without crashing', () => {
    render(<SplashPage />);
    expect(screen.getByText('Air, Water, and Industry Correlation Explorer')).toBeTruthy();
  });

  it('contains a "Get Started" button', () => {
    render(<SplashPage />);
    const button = screen.getByText('Get Started');
    expect(button).toBeTruthy();
  });

  it('displays the product pitch', () => {
    render(<SplashPage />);
    const pitchText = /In the recent climate of the world, understanding how human activity impacts/i;
    expect(screen.getByText(pitchText)).toBeTruthy();
  });
});
