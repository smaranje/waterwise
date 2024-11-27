package com.example.cis4900.spring.waterwiseapp.airemissions;

import com.example.cis4900.spring.waterwiseapp.airemissions.models.AirEmissions;

public interface AirEmissionsService {

    public Iterable<AirEmissions> allAirEmissions();

    public Iterable<AirEmissions.ContaminantData> getNickel();

}
