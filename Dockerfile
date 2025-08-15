#STEP 1 BUILD VUE PROJECT
FROM node:22-alpine3.22 AS build
WORKDIR /app
COPY ./package*.json ./
RUN npm install -g @angular/cli @angular-devkit/build-angular
RUN npm install
COPY . .
# RUN cp ./docker/environment.production.ts ./src/environments/environment.prod.ts
# RUN cp ./docker/environment.production.ts ./src/environments/environment.ts
RUN npm run build

#STEP 2 CREATE NGINX SERVER
FROM nginx:1.29-alpine AS prod-stage
COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/portafolio-angular/browser /usr/share/nginx/html
RUN chown nginx:nginx /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]