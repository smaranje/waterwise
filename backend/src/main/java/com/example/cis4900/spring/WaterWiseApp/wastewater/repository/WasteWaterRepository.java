package com.example.cis4900.spring.waterwiseapp.wastewater.repository;

import com.example.cis4900.spring.waterwiseapp.wastewater.models.WasteWater;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import org.springframework.data.domain.Sort;
import java.util.List;

public interface WasteWaterRepository extends CrudRepository<WasteWater, Long> {

    List<WasteWater> findAll(Sort sort);

    @Query(value = "SELECT * FROM industrial_wastewater_by_facility LIMIT 100", nativeQuery = true)
    List<WasteWater> find100();

    @Query(value = "SELECT id AS id, sample_date AS sampleDate, parameter_name AS parameterName, " 
    + " MAX(measured_value) AS measuredValue, unit_of_measure AS unitOfMeasure "
    + "FROM industrial_wastewater_by_facility "
    + "WHERE parameter_name = 'PHOSPHORUS,UNFILTERED TOTAL' "
    + "GROUP BY sample_date ORDER BY sample_date LIMIT 200", nativeQuery = true)
    List<WasteWater.ParameterData> findPhosph();

    @Query(value = "SELECT id AS id, sample_date AS sampleDate, parameter_name AS parameterName, " 
    + " MAX(measured_value) AS measuredValue, unit_of_measure AS unitOfMeasure "
    + "FROM industrial_wastewater_by_facility "
    + "WHERE parameter_name = 'AMMONIUM+AMMONIA, TOTAL   FILTER.REAC' "
    + "GROUP BY sample_date ORDER BY sample_date LIMIT 200", nativeQuery = true)
    List<WasteWater.ParameterData> findAmmonium();

}
