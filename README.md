# Kettle
The goal with this repo is to have something similar to create-react-app that can be used as a starting point for new apps, but more geared toward someone who wants to build a full stack app with control over the server.

## Features
- Express server set-up to deliver a default server route and a default index file
  - Redux, react-router, mongoose, etc.
- Webpack set-up for dev server
  - hot loading included when possible
  - scss included
  - .jsx and es6 compiling included
  - AirBnb standards for linting included

## Instructions 
- [write this]

## To Do 
- [X] list out a bunch of packages to install (install them later)
- [X] server
  - [X] split out API routes into a separate file
- [X] client
  - [X] include at least one react-router
  - [X] include at least one component
  - [X] include at least one scss
  - [X] include something that does something to the state with redux
- [ ] webpack-dev-server set-up
  - [X] basic serving / compiling
  - [ ] watching
    - nodemon shouldn't watch client files
  - [X] serve static files properly
    - I believe the issue was the publicPath variable in output
  - [X] compile scss
  - [ ] hot loading
  - [ ] linting (https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
  - [ ] CommonChunkPlugin - compile 3rd party code into its own file to speed up caching
### Enhancements
- [ ] move all config files to separate directory
- [ ] move all the dev dependencies to be just dev dependencies 
- [ ] structure to handle development versus production cleanly
- [ ] some basic passport set-up?
- [ ] normalizr
- [ ] jest