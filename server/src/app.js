const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const library = require('./library/v1/library.router');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5222;

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/library', library);

app.get('/', (req, res, next) => {
  res.status(200);
  res.json({ message: 'Hello world' });
});

function notFound(req, res, next) {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode === 200 ? 500 : res.statusCode);
  res.json({
    message: err.message,
    stack: err.stack,
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}...`));
