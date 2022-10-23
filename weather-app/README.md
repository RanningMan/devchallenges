<!-- Please update value in the {}  -->

<h1 align="center">Weather App</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://devchallenge-weather-app.netlify.app">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/RanningMan/devchallenges/tree/main/weather-app">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

Learnings:
1. Javascript: Date API  
  1.1 To get today's date: new Date()  
  1.2 To get tomorrow's date: (new Date()).getDate() + 1  
  1.3 To get weekday: new Date().getDay()  
  1.4 To get Month: new Date().getMonth()  
  1.5 To convert to local time from UTC: new Date(`${utcTime} UTC`)  
2. Review difference between block element vs inline element  
  - inline element can only be asigned left/right margin/padding value  
  - inline element cannot be asigned a width value
3. Geolocation API
- https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
- sample code:
```
    const getCurrentLocation = navigator.geolocation.getCurrentPosition(
			(coordinate) => {
				setLocation([
					coordinate.coords.latitude,
					coordinate.coords.longitude,
				]);
			}
		);
		window.addEventListener('load', getCurrentLocation);
		return () => {
			window.removeEventListener('load', getCurrentLocation);
		};
```
4. renderProps  
https://reactjs.org/docs/render-props.html

5. CSS calc()  
The + and - operators must be surrounded by whitespace. The * and / operators do not require whitespace, but adding it for consistency is both allowed and recommended.

6. Hide secretKey in react app  
https://www.pluralsight.com/guides/hiding-secret-keys-in-create-react-app

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv) was to build an application to complete the given user stories.

- [x] User story: I can see city weather as default, preferably my current location
- [x] User story: I can search for city
- [x] User story: I can see weather of today and the next 5 days
- [x] User story: I can see the date and location of the weather
- [x] User story: I can see according to image for each type of weather
- [x] User story: I can see the min and max degree each day
- [x] User story: I can see wind status and wind direction
- [x] User story: I can see humidity percentage
- [x] User story: I can see a visibility indicator
- [x] User story: I can see the air pressure number
- [x] User story(optional): I can request my current location weather
- [x] User story(optional): I can convert temperature in Celcius to Fahrenheit and vice versa


## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

- [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
- [Node.js](https://nodejs.org/)
- [Marked - a markdown parser](https://github.com/chjj/marked)

## Contact

- Website [rxia.me](https://rxia.me)
- GitHub [@RanningMan](https://github.com/ranningman)
