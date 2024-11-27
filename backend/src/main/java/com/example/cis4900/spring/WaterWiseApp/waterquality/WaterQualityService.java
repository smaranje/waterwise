package com.example.cis4900.spring.waterwiseapp.waterquality;

import com.example.cis4900.spring.waterwiseapp.waterquality.models.WaterQuality;
import java.util.List;

public interface WaterQualityService {

    public Iterable<WaterQuality> allWaterQuality();

    public Iterable<WaterQuality.ParameterData> allAlkalinity();

    public List<WaterQuality.ParameterData> getAlkalinityData();

    public List<WaterQuality.ParameterData> getOxygenData();

    public List<WaterQuality.ParameterData> getNickelData();

    public List<WaterQuality.ParameterData> getAmmoniumData();

}