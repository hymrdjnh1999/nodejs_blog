import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = 3000
app.use(morgan('combined'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname,'./resources/views'));

app.get('/', (req, res) => {
    console.log(path.join(__dirname,'/resources/views'));
    res.render('home');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})