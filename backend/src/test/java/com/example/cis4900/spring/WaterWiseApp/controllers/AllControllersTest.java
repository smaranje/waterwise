package com.example.cis4900.spring.waterwiseapp.controllers;

import com.example.cis4900.spring.waterwiseapp.correlation.CorrelationService;
import com.example.cis4900.spring.waterwiseapp.wastewater.WasteWaterService;
import com.example.cis4900.spring.waterwiseapp.waterquality.WaterQualityService;
import com.example.cis4900.spring.waterwiseapp.wastewater.models.WasteWater;
import com.example.cis4900.spring.waterwiseapp.waterquality.models.WaterQuality;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Collections;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.*;
import org.mockito.Mockito;

@SpringBootTest
@AutoConfigureMockMvc
public class AllControllersTest {

    @Autowired
    private MockMvc mockMvc;

    // Mock services
    @MockBean
    private CorrelationService correlationService;

    @MockBean
    private WasteWaterService wasteWaterService;

    @MockBean
    private WaterQualityService waterQualityService;

    // -------- CorrelationController Tests --------
    @Test
    public void testGetPhosphorusAlkalinityCorrelation() throws Exception {
        // Mock the service method response
        when(correlationService.getPhosphorusAlkalinityCorrelation()).thenReturn(0.85);

        // Perform the GET request and expect a successful response with the correct data
        mockMvc.perform(get("/api/correlation/phosphorus-alkalinity"))
               .andExpect(status().isOk())
               .andExpect(content().string("0.85"));
    }

    // -------- WasteWaterController Tests --------
    @Test
    public void testAllWasteWater() throws Exception {
        // Mock the service response
        WasteWater sampleWasteWater = new WasteWater();
        when(wasteWaterService.allWasteWater()).thenReturn(Collections.singletonList(sampleWasteWater));

        // Perform the GET request and check the response
        mockMvc.perform(get("/api/wastewater/get"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$", hasSize(1))); // Verify the result contains 1 item
    }

    @Test
    public void testAllPhosph() throws Exception {
        // Mock the service response
        WasteWater.ParameterData samplePhosphData = Mockito.mock(WasteWater.ParameterData.class);
        when(wasteWaterService.allPhosph()).thenReturn(Collections.singletonList(samplePhosphData));


        // Perform the GET request and check the response
        mockMvc.perform(get("/api/wastewater/get/phosphorus"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$", hasSize(1))); // Verify the result contains 1 item
    }

    // -------- WaterQualityController Tests --------
    @Test
    public void testAllWaterQuality() throws Exception {
        // Mock the service response
        WaterQuality sampleWaterQuality = new WaterQuality();
        when(waterQualityService.allWaterQuality()).thenReturn(Collections.singletonList(sampleWaterQuality));

        // Perform the GET request and check the response
        mockMvc.perform(get("/api/waterquality/get"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$", hasSize(1))); // Verify the result contains 1 item
    }

    @Test
    public void testAllAlkalinity() throws Exception {
        // Mock the service response
        WaterQuality.ParameterData sampleAlkalinityData = Mockito.mock(WaterQuality.ParameterData.class);
        when(waterQualityService.allAlkalinity()).thenReturn(Collections.singletonList(sampleAlkalinityData));


        // Perform the GET request and check the response
        mockMvc.perform(get("/api/waterquality/get/alkalinity"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$", hasSize(1))); // Verify the result contains 1 item
    }
}
