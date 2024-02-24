FROM node:14

# Set the working directory
WORKDIR /app

# Install dependencies
COPY MicroServicoAutenticacao/package*.json /app/
RUN npm install
# Copy the project code into the container
COPY MicroServicoAutenticacao /app/