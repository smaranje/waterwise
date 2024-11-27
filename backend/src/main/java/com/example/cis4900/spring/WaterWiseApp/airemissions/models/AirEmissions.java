package com.example.cis4900.spring.waterwiseapp.airemissions.models;

import java.sql.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity(name="air_emissions_by_site") // This tells Hibernate to make a table out of this class
public class AirEmissions {

    @Column(name="id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private Long id;

    @Column(name="contaminant")
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private String contaminant;

    @Column(name="exceedance_start_date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date exceedanceStartDate;

    @Column(name="contaminant_unit")
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private String contaminantUnit;

    @Column(name="quantity_maximum")
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private Double quantityMaximum;

    // Getters
    public Long getId() {
        return id;
    }

    public String getContaminant() {
        return contaminant;
    }

    public Date getExceedanceStartDate() {
        return exceedanceStartDate;
    }

    public String getContaminantUnit() {
        return contaminantUnit;
    }

    public Double getQuantityMaximum() {
        return quantityMaximum;
    }

    // Interfaces
    // NOTE: To change whats in the interfaces, you must make the
    // getter and add to sql statement in repository file
    public static interface ContaminantData {
        Long getId();
        String getContaminant();
        Date getExceedanceStartDate();
        String getContaminantUnit();
        Double getQuantityMaximum();
    }

}