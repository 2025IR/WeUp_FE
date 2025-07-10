# Build Stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY .env .env
COPY . .
RUN npm run build
 
# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]