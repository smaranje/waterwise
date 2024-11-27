// index.test.tsx
import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from '@testing-library/react';
import App from '../../App';

// Mock ReactDOM.render to track calls to it
jest.mock('react-dom', () => ({
  render: jest.fn(),
}));

describe('index.tsx', () => {
  it('renders without crashing', () => {
    // Create a root div for testing purposes
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    // Import the index file to trigger the render
    require('../../index.tsx'); // Updated path to locate index.tsx correctly

    // Assert that ReactDOM.render is called with the App component and root div
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      root
    );

    // Clean up by removing the root div
    document.body.removeChild(root);
  });
});

