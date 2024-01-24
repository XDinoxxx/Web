const express = require("express");
const animalController = require("../controllers/animals");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Animal
 *   description: API для работы с животными
 */

/**
 * @swagger
 * /client/:userId/animalform:
 *   post:
 *     summary: Добавление животного
 *     description: Создание заявки по форме.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *               breed:
 *                  type: string
 *               age:
 *                 type: integer
 *               user_id:
 *                  type: integer
 *     responses:
 *       200:
 *         description: Успешный ввод.
 *       401:
 *         description: Неверные ввод.
 *       500:
 *         description: Внутренняя ошибка сервера.
 */
router.post('/client/:userId/animalform', animalController.create);

/**
 * @swagger
 * /client/:userId:
 *   post:
 *     summary: Список животных
 *     description: Список животных пользователя.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                  type: integer
 *     responses:
 *       200:
 *         description: Успешное получение.
 *       401:
 *         description: Неудача.
 *       500:
 *         description: Внутренняя ошибка сервера.
 */
router.get('/client/:userId', animalController.list);

module.exports = router;