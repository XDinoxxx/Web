const express = require('express');
const bodyParser = require('body-parser');
const swagger = require("./swagger");
const app = express();
const cors = require('cors');
const port = 3000;

const userRouter = require("./back/routes/users");
const animalRouter = require("./back/routes/animals");
const requestRouter = require("./back/routes/requests");


app.use(cors({
  origin: 'http://localhost:3001',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(bodyParser.json());

app.use('/', userRouter);
app.use('/', animalRouter);
app.use('/', requestRouter);

swagger(app);

app.listen(port, () => {
  console.log(`Сервер запущен на порту: ${port}`);
  console.log(`Сервер запущен на порту: ${port}`)
});