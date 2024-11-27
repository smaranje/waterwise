package com.example.cis4900.spring.waterwiseapp.waterquality;

import org.springframework.stereotype.Service;

import com.example.cis4900.spring.waterwiseapp.waterquality.repository.WaterQualityRepository;
import com.example.cis4900.spring.waterwiseapp.waterquality.models.WaterQuality;

import java.util.List;

@Service
public class WaterQualityServiceImpl implements WaterQualityService {
    
    private final WaterQualityRepository waterQualityRepository;
    private WaterQuality waterquality;

    public WaterQualityServiceImpl(WaterQualityRepository waterQualityRepository) {
        this.waterQualityRepository = waterQualityRepository;
    }
    
    @Override
    public Iterable<WaterQuality> allWaterQuality() {
        return waterQualityRepository.find100();
    }

    @Override
    public Iterable<WaterQuality.ParameterData> allAlkalinity() {
        return waterQualityRepository.findAlkalinity();
    }

    @Override
    public List<WaterQuality.ParameterData> getAlkalinityData() {
        return waterQualityRepository.findAlkalinity();
    }

    @Override
    public List<WaterQuality.ParameterData> getOxygenData() {
        return waterQualityRepository.findDissolvedOxygen();
    }

    @Override
    public List<WaterQuality.ParameterData> getNickelData() {
        return waterQualityRepository.findNickel();
    }

    @Override
    public List<WaterQuality.ParameterData> getAmmoniumData() {
        return waterQualityRepository.findAmmonium();
    }

}
