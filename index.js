const express = require('express')
const bodyParser = require('body-parser');
var cors = require('cors');
const configMensaje = require('./configMensaje');
const helmet = require('helmet');
const app = express()





var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser());
app.use(helmet.frameguard({ action: 'SAMEORIGIN' }));


app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/fail', (req, res) => res.status(403).json({msg: 'You are not allowed to access this'}));

app.use('/api/user', require('./users'));

app.use('/api/animelist', require('./animes'));

app.post('/api/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
})


app.listen(3000, () => console.log('Example app listening on port 3000!'));