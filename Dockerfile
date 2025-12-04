# Sử dụng Node.js LTS
FROM node:18

# Tạo thư mục làm việc
WORKDIR /app

# Copy file package.json
COPY package.json .

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ project
COPY . .

# Chạy bot
CMD ["npm", "start"]
