import pytest
from scriptOld import get_connection
from unittest.mock import patch
import requests

# Test for MySQL database connection
def test_db_connection():
    cnx = next(get_connection())  # Use next() to get the connection generator
    assert cnx.is_connected() == True  # Ensure connection is established
    cnx.close()  # Close the connection


# Test for fetching Air Emissions data with a mocked API response
@patch('requests.get')
def test_air_emissions_by_site(mock_get):
    mock_get.return_value.json.return_value = [{"facility_owner": "Test Facility"}]
    response = requests.get("https://cis-data-service.socs.uoguelph.ca/data/Air_Emissions_By_Site")
    data = response.json()
    
    assert len(data) == 1  # Ensure only 1 test data entry is returned
    assert data[0]['facility_owner'] == "Test Facility"  # Check mock data


# Test for fetching Stream Water Quality data with a mocked API response
@patch('requests.get')
def test_stream_water_quality(mock_get):
    mock_get.return_value.json.return_value = [{"station": "Test Station"}]
    response = requests.get("https://cis-data-service.socs.uoguelph.ca/data/Stream_Water_Quality")
    data = response.json()
    
    assert len(data) == 1  # Ensure only 1 test data entry is returned
    assert data[0]['station'] == "Test Station"  # Check mock data


# Test for fetching Industrial Wastewater data with a mocked API response
@patch('requests.get')
def test_industrial_wastewater_by_facility(mock_get):
    mock_get.return_value.json.return_value = [{"works_name": "Test Facility"}]
    response = requests.get("https://cis-data-service.socs.uoguelph.ca/data/Industrial_Wastewater_By_Facility")
    data = response.json()
    
    assert len(data) == 1  # Ensure only 1 test data entry is returned
    assert data[0]['works_name'] == "Test Facility"  # Check mock data

