import { getAllWasteWater } from '../../services/wasteWaterService';
import { WasteWaterRow } from '../../types/WasteWaterRow';

// Mock the global fetch function
global.fetch = jest.fn();

describe('wasteWaterService', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('fetches all wastewater data successfully', async () => {
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

      // actual data from getAllWasteWater

      // {   
      //   id: 1050501,
      //   sector: "ELECTRIC POWER GENERATION",
      //   worksName: "BRUCE POWER INC. - DEVELOPMENT SERVICES A AND B",
      //   companyCode: "0001840107",
      //   municipality: "KINCARDINE, MUNICIPALITY",
      //   sampleDate: "2016-04-01",
      //   controlPointName: "PLANT NON-EVENT PROCESS EFFLUENT",
      //   controlPointId: "1700",
      //   parameterName: "FLOW",
      //   parameterReportedAs: "NOT APPLICABLE",
      //   frequency: "MONTHLY",
      //   resultStructure: "MISA MONTHLY REPORTING",
      //   componentType: "AVERAGE",
      //   measuredValue: 1224.9,
      //   unitOfMeasure: "M3/D",
      //   regulation: "MISA COMPLIANCE"
      // },
    
    ];

    

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const data = await getAllWasteWater();

    expect(fetch).toHaveBeenCalledWith('/api/wastewater/get');
    expect(data).toEqual(mockData);
  });

  it('returns an empty array when fetch fails', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('API error'));

    const data = await getAllWasteWater();

    expect(fetch).toHaveBeenCalledWith('/api/wastewater/get');
    expect(data).toEqual([]);
  });
});
