<!-- Please update value in the {}  -->

<h1 align="center">My Unsplash</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://dev-challenge-myunsplash.netlify.app">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/RanningMan/devchallenges/tree/main/my-unsplash">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/rYyhwJAxMfES5jNQ9YsP">
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

architecture:
![arch](architecture.svg)

Learnings:

### **1.Steps to init a serverless app with Amplify Framework (React FE + Rest API + Lambda Function)**
  
  Step 1: `npx create-react-app app-name` to initialize react frontend  
  
  Step 2: `amplify init` to initialize serverless backend  

  Step 3: `npm install aws-amplify` to install aws-amplify lib  
  
  Step 4: Add below code to configure FE to use amplify
    
    import { Amplify } from 'aws-amplify';
    import awsExports from './aws-exports';  
    Amplify.configure(awsExports);  
    
  You may want to move your Ids to environment variables
  Step 5: To add API, run `amplify add api`  

  Step 6: To add Auth, run `amplify add auth`  

  Step 7: Until now, all the changes are local; run `amplify push` to push local changes to cloud  
  
  Step 8: To make call to API,   

    async function postData() {
      const apiName = 'MyApiName';
      const path = '/path';
      const myInit = {
        body: {}, // replace this with attributes you need
        headers: {} // OPTIONAL
      };
      return await API.post(apiName, path, myInit);
    }
    


### **2.use grid layout and fr unit to split columns evenly**
```
main {
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
}
```  
### **3.use grid to overlay**  
```
Most minimal Grid Overlay example:

HTML

<div class="container">
  <div class="content">This is the content</div>
  <div class="overlay">Overlay - must be placed under content in the HTML</div>
</div>
CSS

.container {
  display: grid;
}

.content, .overlay {
  grid-area: 1 / 1;
}
```  


### Built With

- [React](https://reactjs.org/)

## Features

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/rYyhwJAxMfES5jNQ9YsP) was to build an application to complete the given user stories.

- [x] User story: I can see a list of photos in the masonry layout that I have added  
- [x] User story: I can add a new photo to the list - the new photo should be on top of the list  
- [x] User story: I can search for photos by label  
- [x] User story: When I hover a photo, I can see a label and a delete button  
- [x] User story: I can delete images  
- [x] User story (optional): When I delete an image, I can enter my password  

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

- [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
- [Node.js](https://nodejs.org/)
- [Marked - a markdown parser](https://github.com/chjj/marked)

## Contact

- Website [rxia.me](https://rxia.me)
- GitHub [@RanningMan](https://github.com/ranningman)
