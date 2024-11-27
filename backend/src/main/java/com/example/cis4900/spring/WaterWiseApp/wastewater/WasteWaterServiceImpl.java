package com.example.cis4900.spring.waterwiseapp.wastewater;

import org.springframework.stereotype.Service;

import com.example.cis4900.spring.waterwiseapp.wastewater.repository.WasteWaterRepository;
import com.example.cis4900.spring.waterwiseapp.wastewater.models.WasteWater;

import java.util.List;

@Service
public class WasteWaterServiceImpl implements WasteWaterService {
    
    private final WasteWaterRepository wasteWaterRepository;
    private WasteWater wastewater;

    public WasteWaterServiceImpl(WasteWaterRepository wasteWaterRepository) {
        this.wasteWaterRepository = wasteWaterRepository;
    }

    @Override
    public Iterable<WasteWater> allWasteWater() {
        return wasteWaterRepository.find100();
    }

    @Override
    public Iterable<WasteWater.ParameterData> allPhosph() {
        return wasteWaterRepository.findPhosph();
    }

    @Override
    public List<WasteWater.ParameterData> getPhosphorusData() {
        return wasteWaterRepository.findPhosph();
    }

    @Override
    public Iterable<WasteWater.ParameterData> allAmmonium() {
        return wasteWaterRepository.findAmmonium();
    }

}
