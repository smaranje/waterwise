# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /usr/app/

COPY requirements.txt .

# Install mysql-connector-python and cron
RUN pip install -r requirements.txt \
    && apt-get update \
    && apt-get -y install cron \
    && rm -rf /var/lib/apt/lists/*

# Copy the Python script and the cron job file into the container
COPY script.py .


#COPY start-cron.sh /usr/app/start-cron.sh
#COPY todo-cron /etc/cron.d/todo-cron

# Give execution rights on the cron job and shell script
#RUN chmod 0644 /etc/cron.d/todo-cron
#RUN chmod +x /usr/app/start-cron.sh
#RUN chmod +x /usr/app/script.py

# Apply cron job
#RUN crontab /etc/cron.d/todo-cron

# Create a log file to store the output from the cron job
#RUN touch /var/log/cron.log

# Run the shell script which will start cron and the tail log command
CMD ["python3", "/usr/app/script.py"]