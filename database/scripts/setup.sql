CREATE DATABASE IF NOT EXISTS waterwise_db;
USE waterwise_db;


CREATE TABLE IF NOT EXISTS air_emissions_by_site (
    id SERIAL PRIMARY KEY,
    contaminant VARCHAR(100),
    exceedance_start_date DATE,
    contaminant_unit VARCHAR(50),
    quantity_maximum DECIMAL(10, 2)
);

CREATE TABLE IF NOT EXISTS stream_water_quality (
    id SERIAL PRIMARY KEY,
    parm_code VARCHAR(50),
    parm_description TEXT,
    sample_date DATE,
    result DECIMAL(10, 2),
    units VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS industrial_wastewater_by_facility (
    id SERIAL PRIMARY KEY,
    sample_date DATE,
    parameter_name VARCHAR(255),
    measured_value DECIMAL(10, 2),
    unit_of_measure VARCHAR(50)
);
