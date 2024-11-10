# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies (optional if no packages are installed)
# RUN npm install

# Copy the rest of the app’s source code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Run the app
CMD ["node", "index.js"]