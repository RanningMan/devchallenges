<!-- Please update value in the {}  -->

<h1 align="center">Catwiki</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://dev-challenge-catwiki.netlify.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/RanningMan/devchallenges/tree/main/catwiki">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/f4NJ53rcfgrP6sBMD2jt">
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
![arch](./architecture.png)

Learnings:
1. How to fit background image to div? (Responsive image best practice)  
Do following things:  
1.1 use media query to load different images for different screen and set different width and height to fit corredsponding images  
1.2 set background-size to contain, which makes the image to fit INSIDE the div  
1.3 when the image size is not big enough to fit the largest screen, use media query to select the largest screen and add `background-size: 100% 100%` so that the image will resize with the div  
code example:
    ```
    .heroBackground {
        width: 100%;
        height: 30rem;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('./assets/HeroImagesm.png');
    }

    @media screen and (min-width: 501px) and (max-width: 768px) {
        .heroBackground {
            background-image: url('./assets/HeroImagemd.png');
        }
    }

    @media screen and (min-width: 769px) {
        .heroBackground {
            height: 50rem;
            background-image: url('./assets/HeroImagelg.png');
        }
    }

    @media screen and (min-width: 1800px) {
        .heroBackground {
            height: 50rem;
            background-size: 100% 100%;
            background-image: url('./assets/HeroImagelg.png');
        }
    }
    ```  
2. Amplify vs SAM vs Serverless  
Amplify is best suited for client developers who only need a very simple backend.
Serverless is best suited when both client and server sides are complex. But Serverless has a big community and rich plug-ins.
SAM is similar to Serverless, but does not have good plug-in support.

3. DynanmoDB stream  
It is dynamoDB's implementation of Change Data Capture. It can be used to trigger lambda functions.

4. `for await`  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of  
```
    for await (const record of event.Records) {
			await processSingleEvent(record);
		}
``` 

### Built With

- [React](https://reactjs.org/)

## Features

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/rYyhwJAxMfES5jNQ9YsP) was to build an application to complete the given user stories.

- [x] User story: I can search for cat breeds and select a breed of my choice
- [x] User story: I can see the most popular searched cat breeds summary on the homepage
- [x] User story: I can see the top 10 most searched cat breeds
- [x] User story: I can see the breed details including description, temperament, origin, life span, adaptability, affection level, child-friendly, grooming, intelligence, health issues, social needs, stranger friendly
- [x] User story: I can see more photo of the breed
- [x] User story: On mobile, when I select the search option, a modal for breed search should pop up
- [x] User story (optional): I can go to an article about cats when I click read more on Why you should have a cat section
- [x] User story (optional): I can go to the top 10 cats by clicking see more in the dashboard

## Acknowledgements

- [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
- [Node.js](https://nodejs.org/)
- [Marked - a markdown parser](https://github.com/chjj/marked)

## Contact

- Website [rxia.me](https://rxia.me)
- GitHub [@RanningMan](https://github.com/ranningman)
