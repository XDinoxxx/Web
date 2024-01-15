const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const cors = require('cors');
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'db_project',
  password: '1703',
  port: 5432,
});

const sequelize = new Sequelize('postgres://postgres:1703@localhost:5432/db_project');

app.use(cors({
  origin: 'http://localhost:3001', // Укажите домен вашего React-приложения
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(bodyParser.json());

const Users = sequelize.define('Users', {
  login: DataTypes.STRING,
  password: DataTypes.STRING,
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  address: DataTypes.STRING,
  phone: DataTypes.STRING,
  role_id: DataTypes.INTEGER,
}, {
  timestamps: false, // Отключаем использование createdAt и updatedAt
});

const Animals = sequelize.define('Animals', {
  name: DataTypes.STRING,
  type: DataTypes.STRING,
  breed: DataTypes.STRING,
  age: DataTypes.INTEGER,
  user_id: DataTypes.INTEGER,
}, {
  timestamps: false,
});

const Requests = sequelize.define('Requests', {
  client_id: DataTypes.INTEGER,
  petsitter_id: DataTypes.INTEGER,
  service_type: DataTypes.STRING,
  start_time: DataTypes.DATE,
  end_time: DataTypes.DATE,
  animal_id: DataTypes.INTEGER,
}, {
  timestamps: false,
});

const Reviews = sequelize.define('Reviews', {
  client_id: DataTypes.INTEGER,
  petsitter_id: DataTypes.INTEGER,
  review_text: DataTypes.TEXT,
  date_revocation: DataTypes.DATE,
}, {
  timestamps: false,
});


sequelize.sync()
  .then(() => {
    console.log("Database and tables created");
  })
  .catch((error) => {
    console.error("Error syncing database", error);
  })

app.post('/login', async (req, res) => {
  const { login, password } = req.body;

  try {
    const user = await Users.findOne({
      where: {
        login: login,
        password: password,
      },
    });

    if (user) {
      res.json({
        id: user.id,
        role_id: user.role_id,
      });
    } else {
      res.status(401).json({
        error: 'Неверные логин или пароль',
      });
    }
  } catch (error) {
    console.error('Ошибка при запросе к базе данных: ', error);
    res.status(500).json({
      error: 'Ошибка на стороне сервера',
    });
  }
});

app.post('/registration',async (req,res) =>{
  const {login,password,first_name,last_name,address,phone,role_id} = req.body;

  try{
    if (!login || !password || !first_name || !last_name || !address || !phone || !role_id) {
      throw new Error('Все поля должны быть заполнены');
    }
    // Создание нового пользователя
    const user = await Users.create({
      login: login,
      password: password,
      first_name: first_name,
      last_name: last_name,
      address: address,
      phone: phone,
      role_id: role_id,
    });
  
    // Дополнительные действия после успешного создания пользователя
    console.log('Пользователь успешно создан:', user);
  } catch(error){
    console.error('Ошибка при запросе к базе данных: ', error);
    res.status(500).json({
      error: 'Ошибка на стороне сервера',
    });
  }
})

app.listen(port, () => {
  console.log(`Сервер запущен на порту: ${port}`)
})