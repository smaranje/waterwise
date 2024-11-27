import mysql.connector
from apscheduler.schedulers.blocking import BlockingScheduler
from apscheduler.triggers.cron import CronTrigger
import os
import requests
import time
from datetime import datetime

time.sleep(5)

def run_script():

    response_air_emissions_by_site = requests.get("https://cis-data-service.socs.uoguelph.ca/data/Air_Emissions_By_Site", headers={"Apikey": "QwrRIuCvaj9a74cNlTMwwFc8v-KoG5ZVFK_ovCwVbsIR-lCi6w2SuQ"})
    response_stream_water_quality = requests.get("https://cis-data-service.socs.uoguelph.ca/data/Stream_Water_Quality", headers={"Apikey": "QwrRIuCvaj9a74cNlTMwwFc8v-KoG5ZVFK_ovCwVbsIR-lCi6w2SuQ"})
    response_industrial_wastewater_by_facility = requests.get("https://cis-data-service.socs.uoguelph.ca/data/Industrial_Wastewater_By_Facility", headers={"Apikey": "QwrRIuCvaj9a74cNlTMwwFc8v-KoG5ZVFK_ovCwVbsIR-lCi6w2SuQ"})

    cnx = mysql.connector.connect(user=os.environ['DB_USER'], password=os.environ['DB_PASSWORD'],
                            host=os.environ['DB_HOST'],
                            database=os.environ['DB_DATABASE'])

    # Convert responses to json data
    data_air_emissions_by_site = response_air_emissions_by_site.json()
    data_stream_water_quality = response_stream_water_quality.json()
    data_industrial_wastewater_by_facility = response_industrial_wastewater_by_facility.json()

    # Add data to tables, remove old data first?
    cursor = cnx.cursor()

    query = """DELETE FROM air_emissions_by_site"""
    cursor.execute(query)

    query = """DELETE FROM stream_water_quality"""
    cursor.execute(query)

    query = """DELETE FROM industrial_wastewater_by_facility"""
    cursor.execute(query)

    for item in data_air_emissions_by_site:
        query = """INSERT INTO air_emissions_by_site (
                contaminant, 
                exceedance_start_date, 
                contaminant_unit, 
                quantity_maximum)
                VALUES (%s, %s, %s, %s)
                """
        cursor.execute(query, (item['Contaminant'], item['Exceedance Start Date'], 
                            item['Contaminant Unit'], item['Quantity Maximum*']))

    for item in data_stream_water_quality:
        if item['RESULT'] == '':
            item['RESULT'] = '0'

        query = """INSERT INTO stream_water_quality (
                    parm_code, 
                    parm_description, 
                    sample_date, 
                    result,
                    units)
                VALUES (%s, %s, %s, %s, %s)
            """
        cursor.execute(query, (item['PARM'], item['PARM_DESCRIPTION'],
                            item['DATE_YYYYMMDD'], item['RESULT'], item['UNITS']))

    for item in data_industrial_wastewater_by_facility: 

        date_str = item['SAMPLEDATE']

        # Convert to a datetime object
        try:
                date_obj = datetime.strptime(date_str, '%Y/%m')
                item['SAMPLEDATE'] = date_obj.strftime('%Y-%m-01')
        except ValueError:
                date_obj = datetime.strptime(date_str, '%Y/%m/%d')
                item['SAMPLEDATE'] = date_obj.strftime('%Y-%m-%d')

        query = """INSERT INTO industrial_wastewater_by_facility (
                    sample_date, 
                    parameter_name, 
                    measured_value, 
                    unit_of_measure
                    )
                VALUES (%s, %s, %s, %s)
            """
        cursor.execute(query, (item['SAMPLEDATE'], item['Parameter Name'], item['Value'], item['Unit of Measure']))


    cnx.commit()
    cursor.close()
    cnx.close()

    print("Success!")


scheduler = BlockingScheduler()

# To run the script when container first starts up
#run_script()

# scheduler.add_job(run_script, CronTrigger(minute="*/4"))
scheduler.add_job(run_script, CronTrigger(hour=0, minute=0))

print("Scheduler started. Job will run at midnight every day.")
try:
     #Start the scheduler to run the job
    scheduler.start()
except (KeyboardInterrupt, SystemExit) as e:
    print("Failed")
    raise e

