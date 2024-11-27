

import React from 'react';
import { render, screen } from '@testing-library/react';
import CorrelationPlot from '../CorrelationPlot';

// Import jest-dom matchers
import '@testing-library/jest-dom';

describe('CorrelationPlot Component', () => {
  it('renders without crashing', () => {
    render(<CorrelationPlot />);
    expect(screen.getByLabelText(/Select the Data to View/i)).toBeInTheDocument();
  });
});
