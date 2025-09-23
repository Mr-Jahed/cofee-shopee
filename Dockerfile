# Step 1: Use Node.js to build the project
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the project files
COPY . .

# Build the project
RUN npm run build

# Step 2: Use nginx to serve the build
FROM nginx:stable-alpine

# Copy build output to nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx default config (optional, can customize if needed)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
