<!-- Please update value in the {}  -->

<h1 align="center">Image uploader</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://devchallenge-image-uploader.netlify.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/RanningMan/devchallenges/tree/main/image-uploader">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx">
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

1. how to hide file upload input
```
  input {
    z-index: -1;
    width: 0;
    height: 0;
    position: relative;
    overflow: hidden;
    opacity: 0;
  }
```

2. how to use file upload input
```
<input type="file" onChange={onChange} />

<script>
  onChange(e) {
    var files = e.target.files;
    // do stuff
  }
</script>
```

3. how to drag and drop file to upload  
https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop 

4. Clipboard API
There are three primary browser APIs for copying to the clipboard:

    **4.1 [Async Clipboard API](https://www.w3.org/TR/clipboard-apis/#async-clipboard-api) [navigator.clipboard.writeText]**
  - Text-focused portion available in Chrome 66 (March 2018)
  - Access is asynchronous and uses JavaScript Promises, can be written so security user prompts (if displayed) don't interrupt the JavaScript in the page.
  - Text can be copied to the clipboard directly from a variable.
  - Only supported on pages served over HTTPS.
  - In Chrome 66 pages inactive tabs can write to the clipboard without a permissions prompt.

    **4.2 document.execCommand('copy') ([deprecated](https://developer.mozilla.org/docs/Web/API/Document/execCommand#browser_compatibility)) 👎**
  - Most browsers support this as of ~April 2015 (see Browser Support below).
  - Access is synchronous, i.e. stops JavaScript in the page until complete including displaying and user interacting with any security prompts.
  - Text is read from the DOM and placed on the clipboard.
  - During testing ~April 2015 only Internet Explorer was noted as displaying permissions prompts whilst writing to the clipboard.

    **4.3 Overriding the copy event**
  - See Clipboard API documentation on [Overriding the copy event](https://w3c.github.io/clipboard-apis/#override-copy).
  - Allows you to modify what appears on the clipboard from any copy event, can include other formats of data other than plain text.
  - Not covered here as it doesn't directly answer the question.

5. Use aws-amplify
  The open-source Amplify provides the following products to build fullstack iOS, Android, Flutter, Web, and React Native apps:

  Amplify CLI - Configure all the services needed to power your backend through a simple command line interface.
  Amplify Libraries - Use case-centric client libraries to integrate your app code with a backend using declarative interfaces.
  Amplify UI Components - UI libraries for React, React Native, Angular, Vue and Flutter.
  The Amplify Hosting is an AWS service that provides a git-based workflow for continuous deployment & hosting of fullstack web apps. Cloud resources created by the Amplify CLI are also visible in the Amplify Console.

  - ? It is required to use Auth in the code, so at least Auth.configure({}) needs to be called
  - ? It is always required to create a user pool and identity pool in order to use amplify APIs


### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)
- [AWS S3](https://aws.amazon.com/s3/)
- [AWS Amplify](https://docs.amplify.aws/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx) was to build an application to complete the given user stories.  
-[x] User story: I can drag and drop an image to upload it
-[x] User story: I can choose to select an image from my folder
-[x] User story: I can see a loader when uploading
-[x] User story: When the image is uploaded, I can see the image and copy it
-[x] User story: I can choose to copy to the clipboard  

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example -->

- [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
- [Node.js](https://nodejs.org/)
- [Marked - a markdown parser](https://github.com/chjj/marked)

## Contact

- Website [rxia.me](https://rxia.me)
- GitHub [@RanningMan](https://github.com/ranningman)
