package com.example.cis4900.spring.waterwiseapp.wastewater.models;

import java.sql.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity(name="industrial_wastewater_by_facility") // This tells Hibernate to make a table out of this class
public class WasteWater {

    @Column(name="id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private Long id;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date sampleDate;

    @Column(name="parameter_name")
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private String parameterName;

    @Column(name="measured_value")
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private Double measuredValue;

    @Column(name="unit_of_measure")
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private String unitOfMeasure;

    // Getters
    public Long getId() {
        return id;
    }

    public Date getSampleDate() {
        return sampleDate;
    }

    public String getParameterName() {
        return parameterName;
    }

    public Double getMeasuredValue() {
        return measuredValue;
    }

    public String getUnitOfMeasure() {
        return unitOfMeasure;
    }

    // Interfaces
    // NOTE: To change whats in the interfaces, you must make the
    // getter and add to sql statement in repository file
    public static interface ParameterData {
        Long getId();
        Date getSampleDate();
        String getParameterName();
        Double getMeasuredValue();
        String getUnitOfMeasure();
    }

}