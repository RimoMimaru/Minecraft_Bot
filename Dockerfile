# Chọn Node.js base image
FROM node:20

# Tạo folder app
WORKDIR /app

# Copy package.json và package-lock.json
COPY package*.json ./

# Cài dependencies
RUN npm install

# Copy toàn bộ source code
COPY . .

# Set command để chạy bot
CMD ["node", "index.js"]
