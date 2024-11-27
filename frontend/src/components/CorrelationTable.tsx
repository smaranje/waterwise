import React, { useEffect, useState } from 'react';
import { getAlkPhosCorrelation } from '../services/correlationService';
import { getAlkalinity } from '../services/waterQualityService';
import { getPhosphorus } from '../services/wasteWaterService';
import {  QualityData } from '../types/QualityData';
import { WastewaterData } from '../types/WastewaterData';

//TEST
// import { getAllWasteWater } from '../services/wasteWaterService';

const CorrelationTable: React.FC = () => {
    const [phosphorusData, setPhosphorusData] = useState<WastewaterData[]>([]);
    const [alkalinityData, setAlkalinityData] = useState<QualityData[]>([]);
    const [correlation, setCorrelation] = useState<number>(-3);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAllData = async () => {
            
            try {
                const phosData = await getPhosphorus();
                setPhosphorusData(phosData);

                console.log('Fetched phosphorus data:', phosData);
            } catch (err) {
                console.error('Error fetching phosphorus data:', err);
                setError('Failed to fetch phosphorus data');
              } finally {
                setLoading(false);
              }

              try {
                const alkData = await getAlkalinity();
                setAlkalinityData(alkData);

                console.log('Fetched alkalinity data:', alkData);
            } catch (err) {
                console.error('Error fetching alkalinity data:', err);
                setError('Failed to fetch alkalinity data');
              } finally {
                setLoading(false);
              }

              try {
                const corData = await getAlkPhosCorrelation();
                setCorrelation(corData);

                console.log('Fetched correlation data:', corData);
            } catch (err) {
                console.error('Error fetching correlation data:', err);
                setError('Failed to fetch correlation data');
              } finally {
                setLoading(false);
              }
        };
        fetchAllData();
    }, []);

    return (
        <div>
            <h2>Raw Data Tables</h2>
            <h3>Wastewater Phosphorus Levels to Stream Water Alkalnity Peasron Correlation Coefficient is {correlation}</h3>
            <table className='table-wrapper'>
                <caption>**Raw Data for Wastewater Phosphorus Levels (4 Leftmost Columns) and Stream Water Alkalinity Levels (4 Rightmost Columns)**</caption>
                <thead>
                    <tr>
                        <th>SAMPLE DATE</th>
                        <th>PARAMETER NAME</th>
                        <th>MEASURED VALUE</th>
                        <th>UNIT OF MEASURE</th>
                        <th>SAMPLE DATE</th>
                        <th>PARAMETER DESCRIPTION</th>
                        <th>RESULT</th>
                        <th>UNIT</th>
                    </tr>
                </thead>
                <tbody>
                    {(() => {
                        const rows = [];
                        for (let i = 0; i < Math.min(phosphorusData.length, alkalinityData.length); i++) {
                            rows.push(
                                <tr key={phosphorusData[i].id}>
                                    <td>{phosphorusData[i].sampleDate}</td>
                                    <td>{phosphorusData[i].parameterName}</td>
                                    <td>{phosphorusData[i].measuredValue}</td>
                                    <td>{phosphorusData[i].unitOfMeasure}</td>
                                    <td>{alkalinityData[i].sampleDate}</td>
                                    <td>{alkalinityData[i].parmDescription}</td>
                                    <td>{alkalinityData[i].result}</td>
                                    <td>{alkalinityData[i].units}</td>
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

export default CorrelationTable;
