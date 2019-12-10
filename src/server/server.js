const express = require('express');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 8000;
const YEAR = 365 * 24 * 60 * 60 * 1000;

const app = express();

app.use(morgan('tiny'));

app.use('/static/', express.static(path.resolve(__dirname, '../../', 'build/static/'), { maxAge: YEAR }));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../', 'build/index.html'));
})

app.listen(PORT, () => { console.log(`Listening on port: ${PORT}`) });
