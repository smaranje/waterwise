package com.example.cis4900.spring.waterwiseapp.airemissions;

import org.springframework.stereotype.Service;

import com.example.cis4900.spring.waterwiseapp.airemissions.repository.AirEmissionsRepository;
import com.example.cis4900.spring.waterwiseapp.airemissions.models.AirEmissions;

@Service
public class AirEmissionsServiceImpl implements AirEmissionsService {
    
    private final AirEmissionsRepository airEmissionsRepository;
    private AirEmissions airemissions;

    public AirEmissionsServiceImpl(AirEmissionsRepository airEmissionsRepository) {
        this.airEmissionsRepository = airEmissionsRepository;
    }

    @Override
    public Iterable<AirEmissions> allAirEmissions() {
        return airEmissionsRepository.find100();
    }

    @Override
    public Iterable<AirEmissions.ContaminantData> getNickel() {
        return airEmissionsRepository.findNickel();
    }

}
