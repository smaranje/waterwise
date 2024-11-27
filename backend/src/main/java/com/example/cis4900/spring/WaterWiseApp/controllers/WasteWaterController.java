package com.example.cis4900.spring.waterwiseapp.controllers;

import com.example.cis4900.spring.waterwiseapp.wastewater.WasteWaterService;
import com.example.cis4900.spring.waterwiseapp.wastewater.models.WasteWater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(path = "api/wastewater")
public class WasteWaterController {
    private WasteWaterService wasteWaterService;

    @Autowired
    WasteWaterController(WasteWaterService wasteWaterService) {
        this.wasteWaterService = wasteWaterService;
    }

    @GetMapping("/get")
    private @ResponseBody Iterable<WasteWater> allWasteWater() {
        return wasteWaterService.allWasteWater();
    }

    @GetMapping("/get/phosphorus")
    private @ResponseBody Iterable<WasteWater.ParameterData> allPhosph() {
        return wasteWaterService.allPhosph();
    }

    @GetMapping("/get/ammonium")
    private @ResponseBody Iterable<WasteWater.ParameterData> allAmmonium() {
        return wasteWaterService.allAmmonium();
    }

}