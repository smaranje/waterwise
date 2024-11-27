export interface AirEmissionData {
    id: number;
    contaminant: string;
    exceedanceStartDate: string; // NOTE: will be in SQL date format
    contaminantUnit: string;
    quantityMaximum: number;
}