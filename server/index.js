'use strict'

import express from 'express';
import bodyParser from 'body-parser'
import FalcorExpress from 'falcor-express';
import Router from 'falcor-router';
import WesoviBaseRouter from './routers/wesovi-base-router';
import cors from 'cors';
import expressWinston from 'express-winston-2';
import {logger as myLogger} from './config/winston-configuration';

let app = express();


app.use('/model.json', FalcorExpress.dataSourceRoute(function (req, res) {
  // create a Virtual JSON resource with single key ("greeting")
  return new WesoviBaseRouter();
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({exposedHeaders: ['Link']}));
app.use(expressWinston.logger(myLogger));

app.listen(3000);
console.log(`Listening on http://localhost:3000`);
