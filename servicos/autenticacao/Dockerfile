FROM node:14

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json /app/
RUN npm install
# Copy the project code into the container
COPY MicroServicoReview /app/