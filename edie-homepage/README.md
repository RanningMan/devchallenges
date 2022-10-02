<!-- Please update value in the {}  -->

<h1 align="center">Edit Homepage</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://devchallenge-edie-homepage.web.app">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/RanningMan/devchallenges/tree/main/edie-homepage">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/xobQBuf8zWWmiYMIAZe0">
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

Please checkout the demo from Demo page. This is not a challenging practice but it does require a lot of frontend skills, especially responsive design principles, as well as patience and time, to complete it.

Learning:
1. z-index: <b>z-index can only be applied to a positioned element....!!!</b>
2. BEM: https://getbem.com/
    To name css class, follow style `block__element-modifier`. Example in this code: 
    ```
    // block
    .card {
      box-sizing: border-box;
      margin-top: 5rem;
      width: 20rem;
      padding: 2rem;
    }

    // block__element
    .card__icon {
      width: 3rem;
      height: 3rem;
      border-radius: 12px;
      padding: 1px;
      color: whitesmoke;
      text-align: center;
      vertical-align: middle;
    }

    // block__element-modifier
    .card__icon-blue {
      background: #2D9CDB;
    }

    .card__icon-green {
      background: #27AE60;
    }

    .card__icon-red {
      background: #EB5757;
    }
    ```
3. box-shadow
   It is one of the most widely used CSS properties.   
   It' syntax is: `box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color]`;
  - The horizontal offset (required) of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.
  - The vertical offset (required) of the shadow, a negative one means the box-shadow will be above the box, a positive one means the shadow will be below the box.
  - The blur radius (required), if set to 0 the shadow will be sharp, the higher the number, the more blurred it will be, and the further out the shadow will extend. For instance a shadow with 5px of horizontal offset that also has a 5px blur radius will be 10px of total shadow.
  - The spread radius (optional), positive values increase the size of the shadow, negative values decrease the size. Default is 0 (the shadow is same size as blur).
  - Color (required) – takes any color value, like hex, named, rgba or hsla. If the color value is omitted, box shadows are drawn in the foreground color (text color). But be aware, older WebKit browsers (pre Chrome 20 and Safari 6) ignore the rule when color is omitted.

    You can also do something like `box-shadow: 0 -5px 3px -3px black, 0 5px 3px -3px black;`

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/xobQBuf8zWWmiYMIAZe0) was to build an application to complete the given user stories.

- [x] User story: I can see a page following the given design
- [x] User story: I can see a page on mobile following the given design
- [x] User story: I can go to certain locations by selecting links in navigation or footer

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example -->

- [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
- [Node.js](https://nodejs.org/)
- [Marked - a markdown parser](https://github.com/chjj/marked)

## Contact

- Website [rxia.me](https://rxia.me)
- GitHub [@RanningMan](https://github.com/ranningman)
