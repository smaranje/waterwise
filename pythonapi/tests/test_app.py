import pytest
from httpx import AsyncClient
from scriptOld import app  # Import your FastAPI app from scriptOLD

@pytest.mark.asyncio
async def test_root():
    async with AsyncClient(app=app, base_url="http://test") as ac:
        response = await ac.get("/pythonapi/")
    assert response.status_code == 200  # Expecting 200 OK
    assert isinstance(response.json(), dict)  # Expecting a JSON response


@pytest.mark.asyncio
async def test_air_emissions_by_site():
    async with AsyncClient(app=app, base_url="http://test") as ac:
        response = await ac.get("/data/Air_Emissions_By_Site")
    assert response.status_code == 200  # Expecting 200 OK
    assert isinstance(response.json(), list)  # Expecting a list
    assert len(response.json()) > 0  # Ensure data is returned


@pytest.mark.asyncio
async def test_stream_water_quality():
    async with AsyncClient(app=app, base_url="http://test") as ac:
        response = await ac.get("/data/Stream_Water_Quality")
    assert response.status_code == 200  # Expecting 200 OK
    assert isinstance(response.json(), list)  # Expecting a list
    assert len(response.json()) > 0  # Ensure data is returned


@pytest.mark.asyncio
async def test_industrial_wastewater_by_facility():
    async with AsyncClient(app=app, base_url="http://test") as ac:
        response = await ac.get("/data/Industrial_Wastewater_By_Facility")
    assert response.status_code == 200  # Expecting 200 OK
    assert isinstance(response.json(), list)  # Expecting a list
    assert len(response.json()) > 0  # Ensure data is returned

