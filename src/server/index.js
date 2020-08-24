import express from "express";
import path from "path";
import React from "react";
import {Page} from "../Page";
import ReactDOMServer from 'react-dom/server';

const app = express();
const PORT = process.env.PORT || 3006;
app.get('/', (req, res) => {
    const page = ReactDOMServer.renderToString(<Page />);
      return res.send(
      `
        <!DOCTYPE html>
        <html>
          <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="stylesheet" href="/page.css">
          </head>
          <body>
            <div id="root">${page}</div>
        <script src="/bundle.js"></script>
          </body>
        </html>
        `
      );
    });
  
  
app.use('/', express.static(path.join(__dirname,'..','..')));
  
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });