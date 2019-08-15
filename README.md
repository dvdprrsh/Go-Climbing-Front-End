# Go Climbing

Go Climbing is a React app which allows users to find and interact with climbing gyms around the world, ask questions and share tips through the forums and also hire coaches to help them improve.

## Structure
│
│── README.MD             <-- This instructions file
│── .git       		      <-- Git folder
│── package.json          <-- NodeJS dependencies and scripts
│── node_modules          <-- Installed packages
│── src                   <-- Source directory
│   └── actions           <-- Location of redux's actions
│   └── apis              <-- Stores information/data for the apis used
│   └── common-components <-- Shared components used multiple times
│   └── components        <-- Individual components
│   └── images            <-- Images used on the website homepage
│   └── reducers          <-- Location of redux's reducers
│   └── services          <-- Location of shared methods/functions
│   └── history.js        <-- Stores the history of the url bar
│   └── index.js          <-- Displays the pages
│   └── types.js          <-- Constants used throughout application

## Installation

[NodeJS and npm](https://www.npmjs.com/get-npm) are required to run the app.

cd to the directory go-climbing and run

```
HTTPS=true npm start
```

## Usage

You can access the local version of the running App at https://localhost:3000

Or

You can visit the online version [Here](https://goclimbing.herokuapp.com)
