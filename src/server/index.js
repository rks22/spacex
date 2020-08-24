import express from "express";
import path, { dirname } from "path";
import React from "react";
import {Page} from "../Page";
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3006;
app.get('/', (req, res) => {
  const page = ReactDOMServer.renderToString(<Page />);

  const indexFile = path.resolve(__dirname,'..','..','build','index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${page}</div>`)
    );
  });
});


  
  
app.use('/static', express.static(path.join(__dirname,'..','..','build','static')));
  
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });