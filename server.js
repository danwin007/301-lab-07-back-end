'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const superagent = require('superagent');

const PORT = process.env.PORT;
const app = express();
app.use(cors());

//List of Routes
app.get('/', (request, response) => {
  response.send('Home Page');
})
//Location Route
app.get('/location', locationHandler);

function Location(city, geoData){
  this.search_query = city;
  this.formatted_query = geoData[0].display_name;
  this.latitude = geoData[0].lat;
  this.longitude = geoData[0].lon;
}

function locationHandler(request, response){
  try{
    let city = request.query.city;
    let key = process.env.GEOCODE_API_KEY;
    const url = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${city}&format=json&limit=1`;

    superagent.get(url)
      .then(data => {
        const geoData = data.body[0];
        const location = new Location(city, geoData);
        response.send(location);
      })
      .catch(() => {
        errorHandler('location superagent broken', request, response);
      });
  }
  catch(error){
    errorHandler(error, request, response);
  }
}

// app.get('/location', (request, response) => {
//   try{
//     const geoData = require('./data/geo.json');
//     const city = request.query.city;
//     const locationData = new Location(city, geoData);
//     response.send(locationData);
//   }
//   catch(error){
//     errorHandler('Not today, satan.', request, response);
//   }
// })

function Weather (skyData) {
  this.forecast = skyData.summary;
  this.time = new Date(skyData.time * 1000).toDateString();
}


app.get('/weather', (request, response) => {
  try{
    const skyData = require('./data/darksky.json');
    let allWeather = skyData.daily.data.map((byDate) => {
      return new Weather(byDate);
    });
    console.log(allWeather);
    response.send(allWeather);
  }
  catch(error){
    errorHandler('Not today, satan.', request, response);
  }
})


//Helper Function - Error
function errorHandler(error, request, response) {
  response.status(500).send(error);
}












app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
