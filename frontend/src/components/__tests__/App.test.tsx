import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

// Mock child components
jest.mock('../../components/AllWasteWaterPage', () => () => <div data-testid="AllWasteWaterPage" />);
jest.mock('../../components/CorrelationTable', () => () => <div data-testid="CorrelationTable" />);
jest.mock('../../components/CustomizeTable', () => () => <div data-testid="CustomizeTable" />);
jest.mock('../../components/splashPage', () => () => <div data-testid="SplashPage" />);

describe('App Component', () => {
  it('renders the app without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('App')).toBeTruthy();
  });

  // it('includes the CorrelationTable component', () => {
  //   render(<App />);
  //   expect(screen.getByTestId('CorrelationTable')).toBeTruthy();
  // });

  // it('includes the CustomizeTable component', () => {
  //   render(<App />);
  //   expect(screen.getByTestId('CustomizeTable')).toBeTruthy();
  // });

  // it('includes the header with app name', () => {
  //   render(<App />);
  //   expect(screen.getByText('WaterWise App')).toBeTruthy();
  // });
});
