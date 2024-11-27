import { AirEmissionData } from "../types/AirEmissionData";

const API_URL = "/api/airemissions"
console.log('API_URL:', API_URL);

export const getAirNickel = async (): Promise<AirEmissionData[]> => {
    console.log('Fetching Nickel-related rows and columns from:', `${API_URL}/get/nickel`);
    
    try {
        const response = await fetch(`${API_URL}/get/nickel`);
    if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data =await response.json();
    console.log('API response:', data);
    return data;
    } catch (error) {
        console.error('Error fetching nickel data:', error);
        return [];
    }
};