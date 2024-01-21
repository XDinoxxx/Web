const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const swagger = require("./swagger");
const { logger, stream } = require('./back/logger'); 
const cors = require('cors');
const port = 3000;

const userRouter = require("./back/routes/users");
const animalRouter = require("./back/routes/animals");
const requestRouter = require("./back/routes/requests");

const app = express();


app.use(cors({
  origin: 'http://localhost:3001',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// Middleware для логирования HTTP-запросов
app.use(morgan('combined', { stream}));

app.use(bodyParser.json());

// Подключение к базе данных
mongoose.connect('mongodb://localhost:27017/project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware для логирования операций с базой данных
mongoose.connection.on('connected', () => {
  logger.info('Connected to MongoDB');
});

app.use('/', userRouter);
app.use('/', animalRouter);
app.use('/', requestRouter);

swagger(app);

app.listen(port, () => {
  console.log(`Сервер запущен на порту: ${port}`);
});
