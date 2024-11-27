import { QualityData } from "../types/QualityData";

const API_URL = "/api/waterquality"
console.log('API_URL:', API_URL);

export const getAlkalinity = async (): Promise<QualityData[]> => {
    console.log('Fetching Alkalinity-related rows and columns from:', `${API_URL}/get/alkalinity`);
    
    try {
        const response = await fetch(`${API_URL}/get/alkalinity`);
    if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data =await response.json();
    console.log('API response:', data);
    return data;
    } catch (error) {
        console.error('Error fetching alkalinity data:', error);
        return [];
    }
};

export const getOxygen = async (): Promise<QualityData[]> => {
    console.log('Fetching Dissolved Oxygen-related rows and columns from:', `${API_URL}/get/dissolvedoxygen`);
    
    try {
        const response = await fetch(`${API_URL}/get/dissolvedoxygen`);
    if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data =await response.json();
    console.log('API response:', data);
    return data;
    } catch (error) {
        console.error('Error fetching Dissolved Oxygen data:', error);
        return [];
    }
};

export const getWaterNickel = async (): Promise<QualityData[]> => {
    console.log('Fetching Stream-water Nickel-related rows and columns from:', `${API_URL}/get/nickel`);
    
    try {
        const response = await fetch(`${API_URL}/get/nickel`);
    if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data =await response.json();
    console.log('API response:', data);
    return data;
    } catch (error) {
        console.error('Error fetching water nickel data:', error);
        return [];
    }
};

export const getWaterAmmonium = async (): Promise<QualityData[]> => {
    console.log('Fetching Stream-water Ammonium-related rows and columns from:', `${API_URL}/get/ammonium`);
    
    try {
        const response = await fetch(`${API_URL}/get/ammonium`);
    if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data =await response.json();
    console.log('API response:', data);
    return data;
    } catch (error) {
        console.error('Error fetching stream water ammonium data:', error);
        return [];
    }
};