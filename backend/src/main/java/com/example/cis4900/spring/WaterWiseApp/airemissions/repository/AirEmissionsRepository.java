package com.example.cis4900.spring.waterwiseapp.airemissions.repository;

import com.example.cis4900.spring.waterwiseapp.airemissions.models.AirEmissions;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import org.springframework.data.domain.Sort;
import java.util.List;

public interface AirEmissionsRepository extends CrudRepository<AirEmissions, Long> {

    List<AirEmissions> findAll(Sort sort);

    @Query(value = "SELECT * FROM air_emissions_by_site LIMIT 100", nativeQuery = true)
    List<AirEmissions> find100();

    @Query(value = "SELECT id AS id, contaminant AS contaminant, exceedance_start_date AS exceedanceStartDate, " 
    + "contaminant_unit AS contaminantUnit, quantity_maximum AS quantityMaximum "
    + "FROM air_emissions_by_site "
    + "WHERE contaminant = 'NICKEL' "
    + "GROUP BY exceedance_start_date ORDER BY exceedance_start_date LIMIT 200", nativeQuery = true)
    List<AirEmissions.ContaminantData> findNickel();

}
