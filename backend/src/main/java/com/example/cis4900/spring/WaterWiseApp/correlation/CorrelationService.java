package com.example.cis4900.spring.waterwiseapp.correlation;

import com.example.cis4900.spring.waterwiseapp.wastewater.WasteWaterService;
import com.example.cis4900.spring.waterwiseapp.waterquality.WaterQualityService;
import com.example.cis4900.spring.waterwiseapp.wastewater.models.WasteWater;
import com.example.cis4900.spring.waterwiseapp.waterquality.models.WaterQuality;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.IntStream;
import java.util.stream.Collectors;

@Service
public class CorrelationService {

    @Autowired
    private WasteWaterService wasteWaterService;

    @Autowired
    private WaterQualityService waterQualityService;

    public double calculateCorrelation(List<Double> xValues, List<Double> yValues) {
        int n = xValues.size();

        double sumX = xValues.stream().mapToDouble(Double::doubleValue).sum();
        double sumY = yValues.stream().mapToDouble(Double::doubleValue).sum();

        double sumXSquare = xValues.stream().mapToDouble(x -> x * x).sum();
        double sumYSquare = yValues.stream().mapToDouble(y -> y * y).sum();

        double sumXY = IntStream.range(0, n)
                .mapToDouble(i -> xValues.get(i) * yValues.get(i))
                .sum();

        double numerator = n * sumXY - sumX * sumY;
        double denominator = Math.sqrt(
                (n * sumXSquare - sumX * sumX) * (n * sumYSquare - sumY * sumY)
        );

        if (denominator == 0) {
            return 0;
        }

        return numerator / denominator;
    }

    public double getPhosphorusAlkalinityCorrelation() {
        List<WasteWater.ParameterData> phosphorusData = wasteWaterService.getPhosphorusData();
        List<WaterQuality.ParameterData> alkalinityData = waterQualityService.getAlkalinityData();

        // Extract the measured values
        List<Double> phosphorusValues = phosphorusData.stream()
            .map(WasteWater.ParameterData::getMeasuredValue)
            .collect(Collectors.toList());

        List<Double> alkalinityValues = alkalinityData.stream()
            .map(WaterQuality.ParameterData::getResult)
            .collect(Collectors.toList());

        
        int size = Math.min(phosphorusValues.size(), alkalinityValues.size());
        phosphorusValues = phosphorusValues.subList(0, size);
        alkalinityValues = alkalinityValues.subList(0, size);

        // Calculate correlation
        return calculateCorrelation(phosphorusValues, alkalinityValues);
    }
}
