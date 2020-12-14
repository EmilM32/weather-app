# weather-app
- Project name: weather-app
- Programming language: TypeScript
- Package manager: Npm
- UI framework: Vuetify
- Rendering mode: Universal (SSR / SSG)
- Deployment target: Server (Node.js hosting)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## env
To run app you need to add api key to [OpenWeatherMap](https://openweathermap.org/).

Add `.env` file in root directory (at the same level as `nuxt.config.js`) and paste there `API_KEY`.
```
API_KEY=YOUR_API_KEY_HERE
```