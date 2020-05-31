﻿import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import router from './routes';
import mongo from './pkg/database/mongo';


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('/', router);
const database = new mongo();

const port = 5001;
const webServer = app.listen(port, () => {
    console.log(`Server running on port: ${port}`); 
});

