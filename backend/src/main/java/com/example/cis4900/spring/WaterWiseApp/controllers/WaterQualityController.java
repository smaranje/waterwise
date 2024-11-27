package com.example.cis4900.spring.waterwiseapp.controllers;

import com.example.cis4900.spring.waterwiseapp.waterquality.WaterQualityService;
import com.example.cis4900.spring.waterwiseapp.waterquality.models.WaterQuality;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(path = "api/waterquality")
public class WaterQualityController {
    private WaterQualityService waterQualityService;

    @Autowired
    WaterQualityController(WaterQualityService waterQualityService) {
        this.waterQualityService = waterQualityService;
    }

    @GetMapping("/get")
    private @ResponseBody Iterable<WaterQuality> allWaterQuality() {
        return waterQualityService.allWaterQuality();
    }

    @GetMapping("/get/alkalinity")
    private @ResponseBody Iterable<WaterQuality.ParameterData> allAlkalinity() {
        return waterQualityService.allAlkalinity();
    }

    @GetMapping("/get/dissolvedoxygen")
    private @ResponseBody Iterable<WaterQuality.ParameterData> getOxygenData() {
        return waterQualityService.getOxygenData();
    }

    @GetMapping("/get/nickel")
    private @ResponseBody Iterable<WaterQuality.ParameterData> getNickelData() {
        return waterQualityService.getNickelData();
    }

    @GetMapping("/get/ammonium")
    private @ResponseBody Iterable<WaterQuality.ParameterData> getAmmoniumData() {
        return waterQualityService.getAmmoniumData();
    }

}