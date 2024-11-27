import React, { useEffect, useState } from "react";
import { getAlkPhosCorrelation } from "../services/correlationService";
import { getOxygen, getWaterAmmonium } from "../services/waterQualityService";
import { getWaterNickel } from "../services/waterQualityService";
import { getPhosphorus, getWasteAmmonium } from "../services/wasteWaterService";
import { getAirNickel } from "../services/airEmissionService";
import { QualityData } from "../types/QualityData";
import { WastewaterData } from "../types/WastewaterData";
import { AirEmissionData } from "../types/AirEmissionData";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Label,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "./correlationPlot.css";
import CustomizeTable from "./CustomizeTable";

const CorrelationPlot: React.FC = () => {
  const [phosphorusData, setPhosphorusData] = useState<WastewaterData[]>([]);
  const [airNickelData, setAirNickelData] = useState<AirEmissionData[]>([]);
  const [wasteAmmoniumData, setWasteAmmoniumData] = useState<WastewaterData[]>([]);
  const [oxygenData, setOxygenData] = useState<QualityData[]>([]);
  const [waterNickelData, setWaterNickelData] = useState<QualityData[]>([]);
  const [waterAmmoniumData, setWaterAmmoniumData] = useState<QualityData[]>([]);
  // const [correlation, setCorrelation] = useState<number>(-3);
  const [plotDataPoints, setPlotDataPoints] = useState<
    { externalFactor: number; waterQualityMeasure: number }[]
  >([]);
  const [selectedCorrelation, setSelectedCorrelation] =
    useState<string>("phosphorus/oxygen");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleCorrelationSelection = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    e.preventDefault;
    setSelectedCorrelation(e.target.value);
  };

  useEffect(() => {
    const fetchAllData = async () => {
      let oxLen!: number;
      let phosLen!: number;
      let phosData!: WastewaterData[];
      let oxData!: QualityData[];

      try {
        phosData = await getPhosphorus();
        setPhosphorusData(phosData);
        phosLen = phosData.length;

        console.log("Fetched phosphorus data:", phosData);
      } catch (err) {
        console.error("Error fetching phosphorus data:", err);
        setError("Failed to fetch phosphorus data");
      } finally {
        setLoading(false);
      }

      try {
        oxData = await getOxygen();
        setOxygenData(oxData);
        console.log("oxygenData:", oxygenData);
        oxLen = oxData.length;

        console.log("Fetched oxygen data:", oxData);
      } catch (err) {
        console.error("Error fetching oxygen data:", err);
        setError("Failed to fetch oxygen data");
      } finally {
        setLoading(false);
      }



      // console.log(`phosLen: ${phosLen}, oxLen ${oxLen}`);
      console.log(
        `phosphorusData.length: ${phosphorusData.length}, oxygenData.length ${oxygenData.length}`
      );
      var scatterPlotData: {
        externalFactor: number;
        waterQualityMeasure: number;
      }[] = [];
      for (let i = 0; i < Math.min(phosLen, oxLen); i++) {
        scatterPlotData.push({
          externalFactor: phosData[i].measuredValue,
          waterQualityMeasure: oxData[i].result,
        });
        // console.log("added to scatterPlotData: ", scatterPlotData[scatterPlotData.length - 1])
      }

      setPlotDataPoints(scatterPlotData);
    };
    fetchAllData();
  }, []);

  useEffect(() => {
    const fetchSelectedData = async () => {
      var waterNickLen!: number;
      var airNickLen!: number;
      var airNickData!: AirEmissionData[];
      var waterNickData!: QualityData[];

      var oxLen!: number;
      var phosLen!: number;
      var phosData!: WastewaterData[];
      var oxData!: QualityData[];

      var waterAmmLen!: number;
      var wasteAmmLen!: number;
      var waterAmmData!: QualityData[];
      var wasteAmmData!: WastewaterData[];

      if (selectedCorrelation === "phosphorus/oxygen") {
        try {
          phosData = await getPhosphorus();
          setPhosphorusData(phosData);
          phosLen = phosData.length;

          console.log("Fetched phosphorus data:", phosData);
        } catch (err) {
          console.error("Error fetching phosphorus data:", err);
          setError("Failed to fetch phosphorus data");
        } finally {
          setLoading(false);
        }

        try {
          oxData = await getOxygen();
          setOxygenData(oxData);
          console.log("oxygenData:", oxygenData);
          oxLen = oxData.length;

          console.log("Fetched oxygen data:", oxData);
        } catch (err) {
          console.error("Error fetching oxygen data:", err);
          setError("Failed to fetch oxygen data");
        } finally {
          setLoading(false);
        }

        var scatterPlotData: {
          externalFactor: number;
          waterQualityMeasure: number;
        }[] = [];
        for (let i = 0; i < Math.min(phosLen, oxLen); i++) {
          scatterPlotData.push({
            externalFactor: phosData[i].measuredValue,
            waterQualityMeasure: oxData[i].result,
          });
          // console.log("added to scatterPlotData: ", scatterPlotData[scatterPlotData.length - 1])
        }

        setPlotDataPoints(scatterPlotData);

      } else if (selectedCorrelation === "ammonium/ammonium") {

        try {
          wasteAmmData = await getWasteAmmonium();
          setWasteAmmoniumData(wasteAmmData);
          wasteAmmLen = wasteAmmData.length;

          console.log("Fetched wastewater ammonium data:", wasteAmmData);
        } catch (err) {
          console.error("Error fetching wastewater ammonium data:", err);
          setError("Failed to fetch waste water ammonium data");
        } finally {
          setLoading(false);
        }

        try {
          waterAmmData = await getWaterAmmonium();
          setWaterAmmoniumData(waterAmmData);
          waterAmmLen = waterAmmData.length;

          console.log("Fetched streamwater ammonium data:", waterAmmData);
        } catch (err) {
          console.error("Error fetching streamwater ammonium data:", err);
          setError("Failed to fetch streamwater ammonium data");
        } finally {
          setLoading(false);
        }

        var scatterPlotData: {
          externalFactor: number;
          waterQualityMeasure: number;
        }[] = [];
        for (let i = 0; i < Math.min(wasteAmmLen, waterAmmLen); i++) {
          scatterPlotData.push({
            externalFactor: wasteAmmData[i].measuredValue,
            waterQualityMeasure: waterAmmData[i].result,
          });
          // console.log("added to scatterPlotData: ", scatterPlotData[scatterPlotData.length - 1])
        }

        setPlotDataPoints(scatterPlotData);

      } else {

        try {
          airNickData = await getAirNickel();
          setAirNickelData(airNickData);
          airNickLen = airNickData.length;

          console.log("Fetched air nickel data data:", airNickData);
        } catch (err) {
          console.error("Error fetching air nickel data data:", err);
          setError("Failed to fetch air nickel data data");
        } finally {
          setLoading(false);
        }

        try {
          waterNickData = await getWaterNickel();
          setWaterNickelData(waterNickData);
          // console.log("waterNickData:", waterNickData);
          waterNickLen = waterNickData.length;

          console.log("Fetched water nickel data:", waterNickData);
        } catch (err) {
          console.error("Error fetching water nickel data:", err);
          setError("Failed to fetch water nickl data");
        } finally {
          setLoading(false);
        }

        var scatterPlotData: {
          externalFactor: number;
          waterQualityMeasure: number;
        }[] = [];

        for (let i = 0; i < Math.min(airNickLen, waterNickLen); i++) {
          scatterPlotData.push({
            externalFactor: airNickData[i].quantityMaximum,
            waterQualityMeasure: waterNickData[i].result,
          });
          // console.log("added to scatterPlotData: ", scatterPlotData[scatterPlotData.length - 1])
        }

        setPlotDataPoints(scatterPlotData);
      }
    };
    fetchSelectedData();
  }, [selectedCorrelation]);

  const getScatterPlot = () => {
    if(selectedCorrelation === "phosphorus/oxygen") {
      return (
        <ScatterChart
          width={1000}
          height={600}
          margin={{
            top: 20,
            bottom: 40,
            left: 50,
            right: 20,
          }}
        >
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <CartesianGrid />
          <XAxis
            type="number"
            dataKey="externalFactor"
            unit="kg/d"
            name="phosphorus"
          >
            <Label
              value="Wastewater Phosphorus Levels (kg/day)"
              position="bottom"
              offset={20}
            />
          </XAxis>
          <YAxis
              type="number"
              dataKey="waterQualityMeasure"
              unit="mg/L"
              name="dissolved oxygen"
            >
              <Label
                value="Stream Water Dissolved Oxygen Levels(mg/L)"
                angle={-90}
                position="left"
                offset={32}
                style={{ textAnchor: "middle" }}
              />{" "}
              {/* it looks like there's a problem with the recharts 'left' setting so we have to specify this style explicitly */}
            </YAxis>
            <Scatter
              name="Phosphorus vs. Dissolved Oxygen On a Given Date"
              data={plotDataPoints}
              fill="#8884d8"
            />
        </ScatterChart>
      );

    } else if(selectedCorrelation === "ammonium/ammonium") {
      return (
        <ScatterChart
          width={1000}
          height={600}
          margin={{
            top: 20,
            bottom: 40,
            left: 50,
            right: 20,
          }}
        >
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <CartesianGrid />

          <XAxis
              type="number"
              dataKey="externalFactor"
              unit="kg/D"
              name="waste ammonium"
            >
              <Label
                value="Waste Water Ammonium Levels(kg/day)"
                position="bottom"
                offset={20}
              />
            </XAxis>

            <YAxis
              type="number"
              dataKey="waterQualityMeasure"
              unit="mg/L"
              name="stream water ammonium"
            >
              <Label
                value="Stream Water Ammonium (mg/L)"
                angle={-90}
                position="left"
                offset={32}
                style={{ textAnchor: "middle" }}
              />{" "}
              {/* it looks like there's a problem with the recharts 'left' setting so we have to specify this style explicitly */}
            </YAxis>
            <Scatter
              name="Wastewater Ammonium Levels vs. Ammonium in Stream Water On a Given Date"
              data={plotDataPoints}
              fill="#8884d8"
            />
        </ScatterChart>
      );
    } else {
      return (
        <ScatterChart
          width={1000}
          height={600}
          margin={{
            top: 20,
            bottom: 40,
            left: 50,
            right: 20,
          }}
        >
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <CartesianGrid />

          <XAxis
              type="number"
              dataKey="externalFactor"
              unit="μg/m^3"
              name="nickel in air"
            >
              <Label
                value="Nickel Air Emissions (Micrograms/Meter Cubed)"
                position="bottom"
                offset={20}
              />
            </XAxis>

            <YAxis
              type="number"
              dataKey="waterQualityMeasure"
              unit="μg/L"
              name="nickel in stream water"
            >
              <Label
                value="Stream Water Nickel (Micrograms/Litre)"
                angle={-90}
                position="left"
                offset={32}
                style={{ textAnchor: "middle" }}
              />{" "}
              {/* it looks like there's a problem with the recharts 'left' setting so we have to specify this style explicitly */}
            </YAxis>
            <Scatter
              name="Air Nickel Emissions vs. Nickel in Stream Water On a Given Date"
              data={plotDataPoints}
              fill="#8884d8"
            />
        </ScatterChart>
      );
    }
      
    
  }

  return (
    <div>
      <CustomizeTable />
      <div id="selectCorr">
        <label htmlFor="correlationSelect">Select the Data to View: </label>
        <select
          name="correlationSelect"
          id="correlationSelect"
          defaultValue="phosphorus/oxygen"
          onChange={handleCorrelationSelection}
        >
          <option value="phosphorus/oxygen">
            Phosphorus/Dissolved Oxygen In Stream Water
          </option>
          <option value="nickel/nickel">
            Nickel Air Emissions/Nickel In Stream Water
          </option>
          <option value="ammonium/ammonium">
            Ammonium in Wastewater/Ammonium In Stream Water
          </option>
        </select>
      </div>
      <div id="scatter_plot">
        {getScatterPlot()}  
      </div>
    </div>
  );
};

export default CorrelationPlot;
