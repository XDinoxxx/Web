const express = require("express");
const userController = require("../controllers/users");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API для работы с пользователями
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Вход пользователя
 *     description: Авторизация пользователя по логину и паролю.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Успешный вход. Возвращает информацию о пользователе.
 *       401:
 *         description: Неверные логин или пароль.
 *       500:
 *         description: Внутренняя ошибка сервера.
 */

router.post('/login',userController.login);

/**
 * @swagger
 * /registration:
 *   post:
 *     summary: Регистрация пользователя
 *     description: Регистрация нового пользователя.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *               role_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Успешная регистрация. Возвращает информацию о новом пользователе.
 *       400:
 *         description: Ошибка валидации данных.
 *       500:
 *         description: Внутренняя ошибка сервера.
 */
router.post('/registration', userController.registration);

module.exports = router;