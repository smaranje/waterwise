import React from 'react';
import { render, screen } from '@testing-library/react';
import AllWasteWaterPage from '../AllWasteWaterPage';
import { getAllWasteWater } from '../../services/wasteWaterService';
//import { WasteWaterRow } from '../../types/WasteWaterRow';

// Mock the getAllWasteWater function
jest.mock('../../services/wasteWaterService', () => ({
  getAllWasteWater: jest.fn(),
}));

const mockGetAllWasteWater = getAllWasteWater as jest.Mock;

describe('AllWasteWaterPage Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<AllWasteWaterPage />);
    const component = screen.getByTestId('AllWasteWaterPage');
    expect(component).toBeTruthy();
  });

  /*
  it('fetches and displays wastewater data', async () => {
    const mockData: WasteWaterRow[] = [
      {
        id: 1,
        sector: 'Sector A',
        worksName: 'Works 1',
        companyCode: 'Code 1',
        municipality: 'City 1',
        sampleDate: '2023-01-01',
        controlPointName: 'Point 1',
        controlPointId: 'CP1',
        parameterName: 'Param 1',
        parameterReportedAs: 'Reported As 1',
        frequency: 'Daily',
        resultStructure: 'Structure 1',
        componentType: 'Type 1',
        measuredValue: 100,
        unitOfMeasure: 'mg/L',
        regulation: 'Regulation 1',
      },
    ];

    mockGetAllWasteWater.mockResolvedValueOnce(mockData);

    render(<AllWasteWaterPage />);

    // Wait for the data to be fetched and the component to update
    await waitFor(() => {
      expect(mockGetAllWasteWater).toHaveBeenCalledTimes(1);
      const rowText = `${mockData[0].sector}  ${mockData[0].worksName}  ${mockData[0].companyCode}  ${mockData[0].municipality}  ${mockData[0].sampleDate}  ${mockData[0].controlPointName}  ${mockData[0].controlPointId}  ${mockData[0].parameterName}  ${mockData[0].parameterReportedAs}  ${mockData[0].frequency}  ${mockData[0].resultStructure}  ${mockData[0].componentType}  ${mockData[0].measuredValue}  ${mockData[0].unitOfMeasure}  ${mockData[0].regulation}`;
      expect(screen.getByText(rowText)).toBeTruthy();
    });
  });
  */

  /*
  it('displays an error message when fetch fails', async () => {
    mockGetAllWasteWater.mockRejectedValueOnce(new Error('Fetch error'));

    render(<AllWasteWaterPage />);

    await waitFor(() => {
      expect(mockGetAllWasteWater).toHaveBeenCalledTimes(1);
      expect(screen.getByText('Failed to fetch wastewater data')).toBeTruthy();
    });
  });
  */
});
