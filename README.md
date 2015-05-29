# goto-react
Demo app for GOTO Amsterdam 2015

# Getting started

## Install dependencies
1. Install `npm`.
2. `npm install -g watchify`
3. `npm install -g http-server`
4. `npm install reactify`
5. `npm install react`
6. `npm install jquery`

## Build JS
`watchify -t reactify assets/application.js -o public/application.js -v`

## Build CSS (optional)
`sass --watch assets/application.sass:public/application.css`

## Run server
`http-server -P https://kaiwa.io`
