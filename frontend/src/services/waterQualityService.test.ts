import { getAlkalinity, getOxygen } from './waterQualityService';
import { QualityData } from '../types/QualityData';

describe('waterQualityService', () => {
  const mockData: QualityData[] = [
    {
      id: 1,
      sampleDate: '2023-10-31',
      parmDescription: 'Alkalinity',
      result: 150,
      units: 'mg/L',
    },
  ];

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAlkalinity', () => {
    it('should fetch alkalinity data successfully', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      });

      const result = await getAlkalinity();
      expect(fetch).toHaveBeenCalledWith('/api/waterquality/get/alkalinity');
      expect(result).toEqual(mockData);
    });

    it('should handle fetch errors and return an empty array', async () => {
      (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

      const result = await getAlkalinity();
      expect(fetch).toHaveBeenCalledWith('/api/waterquality/get/alkalinity');
      expect(result).toEqual([]);
    });

    it('should return an empty array if response is not OK', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 500,
      });

      const result = await getAlkalinity();
      expect(fetch).toHaveBeenCalledWith('/api/waterquality/get/alkalinity');
      expect(result).toEqual([]);
    });
  });

  describe('getOxygen', () => {
    it('should fetch dissolved oxygen data successfully', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      });

      const result = await getOxygen();
      expect(fetch).toHaveBeenCalledWith('/api/waterquality/get/dissolvedoxygen');
      expect(result).toEqual(mockData);
    });

    it('should handle fetch errors and return an empty array', async () => {
      (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

      const result = await getOxygen();
      expect(fetch).toHaveBeenCalledWith('/api/waterquality/get/dissolvedoxygen');
      expect(result).toEqual([]);
    });

    it('should return an empty array if response is not OK', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 500,
      });

      const result = await getOxygen();
      expect(fetch).toHaveBeenCalledWith('/api/waterquality/get/dissolvedoxygen');
      expect(result).toEqual([]);
    });
  });
});

