package com.example.cis4900.spring.waterwiseapp.controllers;

import com.example.cis4900.spring.waterwiseapp.correlation.CorrelationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/correlation")
public class CorrelationController {

    @Autowired
    private CorrelationService correlationService;

    @GetMapping("/phosphorus-alkalinity")
    public ResponseEntity<Double> getPhosphorusAlkalinityCorrelation() {
        double correlation = correlationService.getPhosphorusAlkalinityCorrelation();
        return ResponseEntity.ok(correlation);
    }
}
