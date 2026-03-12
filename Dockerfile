# Этап 1: Сборка Astro
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Этап 2: Раздача статики через Nginx
FROM nginx:alpine
# Копируем собранный сайт (Astro по умолчанию кладет его в папку dist)
COPY --from=builder /app/dist /usr/share/nginx/html
# Копируем кастомный конфиг Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]