# SPACEX LAUNCHING PROGRAM DETAILS

### Author : Raghavendra KS

This is an application developed for SpaceX, integrated with API to display launches based on year and other parameters.

### Deployed on Netlify:

[View Spacex Launches](https://spacex-p.netlify.app/)

### Functional improvements


Add a loader while users wait for Launches results
Fetch data in batches(limit 10) and fetch more  as user scrolls (react-intersection-observer)

### Techincal improvements

server side rendering is still not in place due to issues with css loader and generated classnames working on server side
Add more test cases
switch to typescipt for strong static type check

### COMMANDS
yarn build  - for production build


yarn start - for development (PORT - 3000)



### Scaffolded from create-react-app


### TECH STACK
REACT


REDUX


REDUX OBSERVABLE


CSS MODULES 

### TESTING 


JEST

### TYPE CHECK


REACT PROPTYPES


FLOW



Built on React with strong support from redux and redux observable for easy maintaince of current launches status at any instant.

Self explanatory action names available in redux dev tools

React Component Library created with pure and simplest components with high re-usability and type checked.

Smart API request control with rxjs observables.


### server side rendering :
Currently server side rendering has some issues rendering with generated class names from css modules. Still working on it.



