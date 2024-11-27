import React, { useEffect, useState } from 'react';
import { getAllWasteWater } from '../services/wasteWaterService';
import { WasteWaterRow } from '../types/WasteWaterRow';

const AllWasteWaterPage: React.FC = () => {
    const [wasteWaterData, setWasteWaterData] = useState<WasteWaterRow[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWasteWaterData = async () => {
            try {
                const data = await getAllWasteWater();
                setWasteWaterData(data);

                console.log('Fetched wastewater data:', wasteWaterData);
            } catch (err) {
                console.error('Error fetching wastewater data:', err);
                setError('Failed to fetch wastewater data');
              } finally {
                setLoading(false);
              }
        };
        fetchWasteWaterData();
    }, []);

    return (
        <div data-testid='AllWasteWaterPage'>
            <table>
                <thead>
                    <tr>
                        <th>SECTOR</th>
                        <th>WORKS_NAME</th>
                        <th>COMPANY_CODE</th>
                        <th>MUNICIPALITY</th>
                        <th>SAMPLE_DATE</th>
                        <th>CONTROL_POINT_NAME</th>
                        <th>CONTROL_POINT_ID</th>
                        <th>PARAMETER_NAME</th>
                        <th>PARAMETER_REPORTED_AS</th>
                        <th>FREQUENCY</th>
                        <th>RESULT_STRUCTURE</th>
                        <th>COMPONENT_TYPE</th>
                        <th>MEASURED_VALUE</th>
                        <th>UNIT_OF_MEASURE</th>
                        <th>REGULATION</th>
                    </tr>
                </thead>
                <tbody>
                    {(() => {
                        const rows = [];
                        for (let i = 0; i < wasteWaterData.length; i++) {
                            rows.push(
                                <tr key={wasteWaterData[i].controlPointId}>
                                    <td>{wasteWaterData[i].sector}</td>
                                    <td>{wasteWaterData[i].worksName}</td>
                                    <td>{wasteWaterData[i].companyCode}</td>
                                    <td>{wasteWaterData[i].municipality}</td>
                                    <td>{wasteWaterData[i].sampleDate}</td>
                                    <td>{wasteWaterData[i].controlPointName}</td>
                                    <td>{wasteWaterData[i].controlPointId}</td>
                                    <td>{wasteWaterData[i].parameterName}</td>
                                    <td>{wasteWaterData[i].parameterReportedAs}</td>
                                    <td>{wasteWaterData[i].frequency}</td>
                                    <td>{wasteWaterData[i].resultStructure}</td>
                                    <td>{wasteWaterData[i].componentType}</td>
                                    <td>{wasteWaterData[i].measuredValue}</td>
                                    <td>{wasteWaterData[i].unitOfMeasure}</td>
                                    <td>{wasteWaterData[i].regulation}</td>
                                </tr>
                            );
                        }
                        return rows;
                    })()}
                </tbody>
            </table>
        </div>
        
        
    );
};

export default AllWasteWaterPage;