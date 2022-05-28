FROM node:14.1-alpine AS builder

# ARG VITE_DOMAIN
# ARG VITE_CLIENT
# ARG VITE_REDIRECT



WORKDIR /opt/web
COPY package.json package-lock.json ./
RUN npm cache verify
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"
#TODO Made this dynamic - Investigate issue with heroku
ENV VITE_DOMAIN "jingpalma.us.auth0.com"
ENV VITE_CLIENT "9iFbgE7VwJoibEvKHRn1BUKVibHqNtMF"
ENV VITE_REDIRECT "https://jpalma-weather-app-frontend.herokuapp.com/dashboard/"
ENV VITE_AUDIENCE "https://jpalma-weather-app-backend.herokuapp.com/api/"

COPY . ./
RUN npm run build

FROM nginx:1.17-alpine

RUN apk --no-cache add curl
RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
    chmod +x envsubst && \
    mv envsubst /usr/local/bin
COPY ./nginx.config /etc/nginx/nginx.template
CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
COPY --from=builder /opt/web/dist /usr/share/nginx/html
