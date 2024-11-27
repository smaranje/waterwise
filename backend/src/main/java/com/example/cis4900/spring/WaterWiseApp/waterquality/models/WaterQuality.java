package com.example.cis4900.spring.waterwiseapp.waterquality.models;

import java.sql.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity(name="stream_water_quality") // This tells Hibernate to make a table out of this class
public class WaterQuality {

    @Column(name="id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private Long id;

    @Column(name="parm_code")
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private String parmCode;

    @Column(name="parm_description")
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private String parmDescription;

    @Column(name="sample_date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date sampleDate;

    @Column(name="result")
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private Double result;

    @Column(name="units")
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private String units;

    // Getters
    public Long getId() {
        return id;
    }

    public Date getSampleDate() {
        return sampleDate;
    }

    public String getParmDescription() {
        return parmDescription;
    }

    public Double getResult() {
        return result;
    }

    public String getUnits() {
        return units;
    }

    // Interfaces
    // NOTE: To change whats in the interfaces, you must make the
    // getter and add to sql statement in repository file
    public static interface ParameterData {
        Long getId();
        Date getSampleDate();
        String getParmDescription();
        Double getResult();
        String getUnits();
    }

}