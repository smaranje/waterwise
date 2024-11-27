

import React from 'react';
import { render, screen } from '@testing-library/react';
import CorrelationTable from '../CorrelationTable';

// Import jest-dom matchers
import '@testing-library/jest-dom';

describe('CorrelationTable Component', () => {
  it('renders without crashing', () => {
    render(<CorrelationTable />);
    expect(screen.getByText(/Raw Data Tables/i)).toBeInTheDocument();
  });
});
