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
  this.formatted_query = geoData.display_name;
  this.latitude = geoData.lat;
  this.longitude = geoData.lon;
}

function locationHandler(request, response){
  try{
    const city = request.query.city;
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.GEOCODE_API_KEY}&q=${city}&format=json&limit=1`;
    // console.log(url);

    superagent.get(url)
      .then(data => {
        console.log(data.body[0]);
        const locationData = new Location(city, data.body[0]);
        response.send(locationData);
      })
  }
  catch(error){
    errorHandler('Not today, satan.', request, response);
  }
}


// app.get('/location', (request, response) => {

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
