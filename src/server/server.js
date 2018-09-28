const express = require('express');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(morgan('tiny'));

app.use('/static/js/', express.static(path.resolve(__dirname, '../../', 'build/static/js')));
app.use('/static/css/', express.static(path.resolve(__dirname, '../../', 'build/static/css')));
app.use('/static/media/', express.static(path.resolve(__dirname, '../../', 'build/static/media')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../', 'build/index.html'));
})

app.listen(PORT, () => { console.log(`Listening on port: ${PORT}`) });
