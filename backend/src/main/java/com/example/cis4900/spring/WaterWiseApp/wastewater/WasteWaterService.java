package com.example.cis4900.spring.waterwiseapp.wastewater;

import com.example.cis4900.spring.waterwiseapp.wastewater.models.WasteWater;

import java.util.List;

public interface WasteWaterService {

    public Iterable<WasteWater> allWasteWater();

    public Iterable<WasteWater.ParameterData> allPhosph();

    public List<WasteWater.ParameterData> getPhosphorusData();

    public Iterable<WasteWater.ParameterData> allAmmonium();


}