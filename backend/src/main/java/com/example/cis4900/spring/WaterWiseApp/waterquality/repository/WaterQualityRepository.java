package com.example.cis4900.spring.waterwiseapp.waterquality.repository;

import com.example.cis4900.spring.waterwiseapp.waterquality.models.WaterQuality;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import org.springframework.data.domain.Sort;
import java.util.List;

public interface WaterQualityRepository extends CrudRepository<WaterQuality, Long> {

    List<WaterQuality> findAll(Sort sort);

    @Query(value = "SELECT * FROM stream_water_quality LIMIT 100", nativeQuery = true)
    List<WaterQuality> find100();

    @Query(value = "SELECT id AS id, sample_date AS sampleDate, parm_description AS parmDescription, " 
    + " result AS result, units AS units "
    + "FROM stream_water_quality "
    + "WHERE parm_code = 'ALKT' LIMIT 200", nativeQuery = true)
    List<WaterQuality.ParameterData> findAlkalinity();

    @Query(value = "SELECT id AS id, sample_date AS sampleDate, parm_description AS parmDescription, " 
    + "MAX(result) AS result, units AS units "
    + "FROM stream_water_quality "
    + "WHERE parm_code = 'DO' "
    + "GROUP BY sample_date "
    + "ORDER BY sample_date LIMIT 200", nativeQuery = true)
    List<WaterQuality.ParameterData> findDissolvedOxygen();

    @Query(value = "SELECT id AS id, sample_date AS sampleDate, parm_description AS parmDescription, " 
    + "MAX(result) AS result, units AS units "
    + "FROM stream_water_quality "
    + "WHERE parm_code = 'NIUT' "
    + "GROUP BY sample_date "
    + "ORDER BY sample_date LIMIT 200", nativeQuery = true)
    List<WaterQuality.ParameterData> findNickel();

    @Query(value = "SELECT id AS id, sample_date AS sampleDate, parm_description AS parmDescription, " 
    + "MAX(result) AS result, units AS units "
    + "FROM stream_water_quality "
    + "WHERE parm_code = 'NNHTUR' "
    + "GROUP BY sample_date "
    + "ORDER BY sample_date LIMIT 200", nativeQuery = true)
    List<WaterQuality.ParameterData> findAmmonium();

}
