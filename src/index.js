//const express=require('express'); 
import express from 'express';

import {dirname,join} from 'path';
import {fileURLToPath} from 'url';
import routes from './routes/index.js';
//import ejs from 'ejs';

const app = express()

//forma de obtener la ruta absoluta de un archivo en node
const  __dirname = dirname(fileURLToPath(import.meta.url));
//console.log(join(__dirname,'views'));//

app.set('views',join(__dirname,'views'));
app.set('view engine','ejs');
app.use(routes);
app.use(express.static(join(__dirname,'public')));

app.listen(process.env.PORT || 3000);