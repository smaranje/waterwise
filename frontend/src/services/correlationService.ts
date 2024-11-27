const API_URL = "/api/correlation"
console.log('API_URL:', API_URL);

export const getAlkPhosCorrelation = async (): Promise<number> => {
    console.log('Fetching correlation coefficient value from:', `${API_URL}/phosphorus-alkalinity`);
    
    try {
        const response = await fetch(`${API_URL}/phosphorus-alkalinity`);
    if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data =await response.json();
    console.log('API response:', data);
    return data;
    } catch (error) {
        console.error('Error fetching alkalinity data:', error);
        return -2; //invalid value for pearson correlation coefficient
    }
}