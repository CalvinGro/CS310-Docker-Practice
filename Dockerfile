# Use Python 3.11
FROM python:3.11

# Set working directory in container
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy of directory
COPY website/ .

# Expose port 8000
EXPOSE 8000

# Command to run the app
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "app:app"]
