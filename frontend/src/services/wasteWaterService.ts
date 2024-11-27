import { WasteWaterRow } from "../types/WasteWaterRow"
import { WastewaterData } from "../types/WastewaterData";

const API_URL = "/api/wastewater"
console.log('API_URL:', API_URL);

export const getAllWasteWater = async (): Promise<WasteWaterRow[]> => {
    console.log('Fetching all rows from:', `${API_URL}/get`);
    
    try {
        const response = await fetch(`${API_URL}/get`);
    if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data =await response.json();
    console.log('API response:', data);
    return data;
    } catch (error) {
        console.error('Error fetching wastewater data:', error);
        return [];
    }
};

export const getPhosphorus = async (): Promise<WastewaterData[]> => {
    console.log('Fetching Phosphorus-related rows and columns from:', `${API_URL}/get/phosphorus`);
    
    try {
        const response = await fetch(`${API_URL}/get/phosphorus`);
    if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data =await response.json();
    console.log('API response:', data);
    return data;
    } catch (error) {
        console.error('Error fetching phosphoros data:', error);
        return [];
    }
};

export const getWasteAmmonium = async (): Promise<WastewaterData[]> => {
    console.log('Fetching Ammonium-related rows and columns from:', `${API_URL}/get/ammonium`);
    
    try {
        const response = await fetch(`${API_URL}/get/ammonium`);
    if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data =await response.json();
    console.log('API response:', data);
    return data;
    } catch (error) {
        console.error('Error fetching ammonium data:', error);
        return [];
    }
};

