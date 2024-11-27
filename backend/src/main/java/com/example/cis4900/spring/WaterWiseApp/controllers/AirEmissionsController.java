package com.example.cis4900.spring.waterwiseapp.controllers;

import com.example.cis4900.spring.waterwiseapp.airemissions.AirEmissionsService;
import com.example.cis4900.spring.waterwiseapp.airemissions.models.AirEmissions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(path = "api/airemissions")
public class AirEmissionsController {
    private AirEmissionsService airEmissionsService;

    @Autowired
    AirEmissionsController(AirEmissionsService airEmissionsService) {
        this.airEmissionsService = airEmissionsService;
    }

    @GetMapping("/get")
    private @ResponseBody Iterable<AirEmissions> allAirEmissions() {
        return airEmissionsService.allAirEmissions();
    }

    @GetMapping("/get/nickel")
    private @ResponseBody Iterable<AirEmissions.ContaminantData> allNickel() {
        return airEmissionsService.getNickel();
    }

}