# 301-lab-07-back-end
Code Fellows lab 07 workspace with Brett Packard

**Author**: Daniel Nguyen & Brett Packard
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
We are hoping to build a backend for a frontend app that shows all kinds of information based on city input from the user. The backend should deliver weather, restaurant, and event data.

## Getting Started
The user will simply need to clone down our repo in order to use this app. They will also need access to the front end provided by our class demo.

## Architecture
This application will be primarily built with JavaScript and JSON. It will be interacting with HTML and CSS provided by a separate developer. The API information will be accessed and massaged by Node, npm, Super Agent, express, cors, and dotenv.

## Change Log

**deployed Heroku Link**
https://cf-301-lab-07.herokuapp.com

**2020.01.22**
7:05pm:
Finished setting up files needed to start lab. Brett arrives. Starting feature 1 now. 

8:05pm: 
Finished the .map set up. Now starting feature 2.

9:00pm:
Finished feature 2. We are both feeling tired and stupid. Gonna head home and try again tomorrow. 

**2020.01.23**
5:15pm:
Beginning to set up to tackle feature 3.

6:30pm:
Figured out feature 3 with the help of Clayton, Thomas, Kory, Cas, and Krystal.

7:18pm:
Tried to verify that the app was working with the deployed site (on heroku). It was working on the live-server and host 3000 versions but the live deployed site was returning errors.

I brought the issue to Cory and we couldn't figure it out. Kate tagged in. Still no good. Then we asked John, lead instructor. He suggested using the actual live Code Fellows City Explorer page to test. We tried that and it still didn't work. 30 minutes later, Thomas wanders over curious about our issue. The console error was related to cors. We tried some edits to cors. We tried redeploying to Heroku a few times. No Luck. Thomas suggested that we add our API keys to heroku since the .env file is not pushed up when we deploy. There is a section on heroku for adding API keys. We added those and the deployed app now works! However, I've burned a lot of time on this now so I'm going to work on the code challenges for the rest of the night.

<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource.
-->

## Credits and Collaborations
Big shout outs to TAs Cory and Leo for helping us understand what the hell was going on with this lab. Also Clayton, Cas, Krystal, Thomas, and Kory.

## Feature Progress

### Feature 1
Number and name of feature: Data formatting

Estimate of time needed to complete: 30 min

Start time: 7:05pm

Finish time: 8:00pm

Actual time needed to complete: 55 min

### Feature 2
Number and name of feature: Locations

Estimate of time needed to complete: 1 hour

Start time: 8:02pm

Finish time: 9:00pm

Actual time needed to complete: 1 hour

### Feature 3
Number and name of feature: Weather

Estimate of time needed to complete: 1 hour

Start time: 5:15pm

Finish time: 6:30pm

Actual time needed to complete: 1 hour, 15 min

### Feature 4
Number and name of feature: Eventful

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____

## Previous Iteration Below from Lab 06, parter = Sian Culligan

# city_explorer

Number and name of feature: 
1. Repo setup
2. Location Route
3. Weather Route


Estimate of time needed to complete:
1. Repo setup: 15 minutes
2. Location Route: 30 minutes
3. Weather Route: 1 hour

Start time: 2:00

Finish time: 4:20

Actual time needed to complete: 2h 20min

**Author**: Daniel Nguyen, Sian Culligan

**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
As a user, I want more info about a specified city, including a map,  weather, movies, events, and trails.

## Getting Started
Clone this repo: https://github.com/SianCulligan/lab-06-back-end


## Architecture
We built a location object and weather object that transverses difference Json files for information requested, that then passes it to the static front end.

## Change Log
01-18-2020 4:20pm: App now has working location & weather data. Hooray.

## Credits and Collaborations
https://github.com/danwin007


## Resources: 

https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript