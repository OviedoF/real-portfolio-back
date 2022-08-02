const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const cors = require('cors');

/* init */
const app = express();
const port = process.env.PORT || 4000;
require(path.join(__dirname, 'mongodb.js'));


/* setting */
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    origin: '*'
}))

/* middlewares */
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(require(path.join(__dirname, 'config', 'multer.config.js')))

/* routes */
app.use('/', require(path.join(__dirname, 'routes', 'index.routes.js')));
app.use('/api/themes', require(path.join(__dirname, 'routes', 'themes.routes.js')));
app.use('/api/projects', require(path.join(__dirname, 'routes', 'projects.routes.js')));
app.use('/api/tecnologies', require(path.join(__dirname, 'routes', 'tecnologies.routes.js')));

app.listen(port, () => {
    console.log('inicializado en puerto', port);
})