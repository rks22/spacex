import express from "express";
import path, { dirname } from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import fs from "fs";
import configureStore from "../Spacexstore/serverStore";
import { Provider } from "react-redux";
import { View } from "../Pages/LaunchesView";
import { responseParser } from "../features/Launches/parser";
const fetch = require("node-fetch");

let preloadedState = { spacex_launches: { value: null } };


function renderFullPage(html, preloadedState={}) {
    return `
      <!doctype html>
      <html>
        <head>
        <meta charset="utf-8">
        <link rel="icon" href="/favicon.ico"><meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="theme-color" content="#000000">
        <meta name="description" content="Spacex Lauch Programs">
        <title>Spacex Lauch Programs</title>
        <link rel="preload" href="/static/page.css" as="style">
        <link rel="preload" href="/static/bundle.js" as="script">
          <link rel="stylesheet" href="/static/page.css">
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
              /</g,
              '\\u003c'
            )}
          </script>
          <script src="/static/bundle.js"></script>
        </body>
      </html>
      `
  }
function handleRender(req, res) {
    fetch('https://api.spaceXdata.com/v3/launches?limit=100').then((response) => {
        response.json().then((data) => {
            preloadedState.spacex_launches.value = responseParser(data);
            let store = configureStore(preloadedState);
            const page = ReactDOMServer.renderToString( <Provider store={store}>
                <View />
              </Provider>);
              const finalState = store.getState();
            res.send(renderFullPage(page, finalState));
        })
    
}).catch(error => {
    let store = configureStore();
    const page = ReactDOMServer.renderToString( <Provider store={store}>
        <View />
      </Provider>);
    res.send(renderFullPage(page));
})
}

const app = express();
const PORT = process.env.PORT || 3006;
app.use(
  "/static",
  express.static(path.join(__dirname,'/../../'))
);
app.get('/',handleRender)


console.log(__dirname);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
