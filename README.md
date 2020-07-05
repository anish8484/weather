# weather-forecast


## How to use the app

### To see weather for a city:

1) Type a city name such as "Mumbai" into the search box
2) Click on the Search button

### To see an error:

1) Type a long nonsense string such as "safds24" into the search box
2) Click on the Search button

### How to run install

```
npm install
```
### How to run build
```
npm run build
```
### How to run app
```
npm start
```

### How to run JavaScript linting
```
npm run lint
```
### How to run unit tests
```
npm test
```
### Data validation

- I have created a basic validation function to check the server response (src/networking/isServerJsonValid.js) but in a real-world application I would implement more thorough validation.

### Usability and design

- The API provides IDs for icons that represent each weather state, which I would use to show images for each weather state.
- Rather than show the weather for every 3 hours as provided by the API, by default I would show an average temperature for the day with a limited subset of key data, e.g. "Rain/Wind".



