export interface WasteWaterRow {
    id: number;
    sector: string;
    worksName: string;
    companyCode: string;
    municipality: string;
    sampleDate: string; // will be in format "yyyy-MM-dd")
    controlPointName: string;
    controlPointId: string;
    parameterName: string;
    parameterReportedAs: string;
    frequency: string;
    resultStructure: string;
    componentType: string;
    measuredValue: number; //can't be bigint, must check if it can handle edge case data points
    unitOfMeasure: string;
    regulation: string;
}