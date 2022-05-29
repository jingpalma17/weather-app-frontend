# Weather App WEB

**[DEMO Weather App Web](https://jpalma-weather-app-frontend.herokuapp.com/login)**

**[DEMO Weather App API](https://jpalma-weather-app-backend.herokuapp.com/)** 


## Technologies
- Vue3
- Vue Router
- TypeScript
- Pinia
- Docker
- Tailwind
- Heroku
- Axios
- Auth0
- Nginx
- Vite



## Env variable
Create `.env` file based on `sample.env`.
Fill up the correct configurations in `.env` file

```
VITE_DOMAIN=
VITE_CLIENT=
VITE_REDIRECT=
VITE_AUDIENCE=
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```



## Deploy to Heroku

heroku create jpalma-weather-app-frontend

heroku container:push web --app jpalma-weather-app-frontendontend

heroku container:release web --app jpalma-weather-app-frontend

heroku config:set VITE_DOMAIN=$VITE_DOMAIN VITE_CLIENT=$VITE_CLIENT VITE_REDIRECT=$VITE_REDIRECT VITE_AUDIENCE=$VITE_AUDIENCE --app <project-name

Create heroku.yml
```
build:
  docker:
    web: Dockerfile

```