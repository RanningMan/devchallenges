<!-- Please update value in the {}  -->

<h1 align="center">Todo App</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://devchallenge-todoapp.netlify.app">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/RanningMan/devchallenges/tree/main/todo-app">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/hH6PbOHBdPm6otzw2De5">
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

Please go to demo page for a live demo

Learnings:
1. There are two ways to make a group of li item horizontal and with no dots:
    option 1: 
    ```
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>

    {
        ul {
            display: flex;
            justify-content: space-around;
        }
        li {
            list-item-style: none;
        }
    }
    ```
    option 2:
    ```
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>

    {
        li {
            display: inline-block;
        }
    }

    ```
2. Event bubbling and capturing:  
https://javascript.info/bubbling-and-capturing 
3. How to make React useEffect hook not run on initial render  
useRef to the rescue
    ```
    const firstRender = useRef(true);
    useEffect(() => {
        if (!firstRender.current) {
            // do stuff
        } else {
            // do stuff
            firstRender.current = false;
        }
    });
    ```

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/hH6PbOHBdPm6otzw2De5) was to build an application to complete the given user stories.

- [x] User story: I can add a new task
- [x] User story: I can complete a task
- [x] User story: I can toggle between All, Active and Completed
- [x] User story: I can remove one or all tasks under the Completed tab
- [x] User story (optional): Store the data in local storage that when I refresh the page I can still see my progress

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

- [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
- [Node.js](https://nodejs.org/)
- [Marked - a markdown parser](https://github.com/chjj/marked)

## Contact

- Website [https://rxia.me](https://rxia.me)
- GitHub [@RanningMan](https://github.com/ranningman)
