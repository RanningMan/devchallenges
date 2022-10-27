<!-- Please update value in the {}  -->

<h1 align="center">Job Board</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://devchallenge-job-board.netlify.app">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/RanningMan/devchallenges/tree/main/job-board">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/TtUjDt19eIHxNQ4n5jps">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

Learning:
1. React-router  
React-router APIs that I used in this project are: createBrowserRouter, loader (with router params), useLoaderData, and Link.
Code sample:
```
in index.js:
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Oops!</div>,
    loader: appLoader
  },
  {
    path: '/job/:jobId',
    element: <JobDescription />,
    loader: jobDescriptionLoader,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

in app.jsx:
export async function loader({ params }) {}
export function App() {
    const data = useLoaderData();

    <Link
        to={`job/${encodeURIComponent(job.job_id)}`}
        className='__reactRouterLink'
    >
}
```
2. encodeURIComponent  
Only alphanumerics, the special characters "$-_. +! *'(),", and reserved characters used for their reserved purposes may be used unencoded within a URL. The reserved characters are ";", "/", "?", ":", "@", "=" and "&", which means you would need to URL encode them if you wish to use them.

3. localStorage API  
You have a few methods to choose from when performing operations on localStorage. They are:
- setItem()
- getItem()
- removeItem()
- clear()
- key()

4. A concise, modern approach to use fetch API:
```
fetch('https://example.com?' + new URLSearchParams({
    foo: 'value',
    bar: 2,
}))
```
5. Use `background-size:cover` CSS property to stretch background image.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/TtUjDt19eIHxNQ4n5jps) was to build an application to complete the given user stories.

- [x] User story: I can see a list of jobs in a city by default
- [x] User story: I can search for jobs with a given keyword
- [] User story: I can search for jobs with a city name, zip code, or other location
- [x] User story: I can select one option from at least 4 pre-defined options
- [x] User story: I can search for a full-time job only
- [x] User story: I can see a list of jobs with their logo, company name, location, and posted time.
- [x] User story: When I select a job, I can see job descriptions and how to apply like the given design.
- [x] User story: When I am on the job details page, I can go back to the search page
- [x] User story (optional): I can see a list of jobs in the closest city from my location by default
- [x] User story (optional): I can see jobs on different pages, 10 items on each page


## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

- [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
- [Node.js](https://nodejs.org/)
- [Marked - a markdown parser](https://github.com/chjj/marked)
- [cors-anywhere](https://github.com/Rob--W/cors-anywhere)

## Contact

- Website [rxia.me](https://rxia.me)
- GitHub [@RanningMan](https://github.com/ranningman)
