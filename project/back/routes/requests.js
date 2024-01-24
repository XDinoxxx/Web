const express = require("express");
const requestController = require("../controllers/requests");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Requests
 *   description: API для работы с заявками
 */

/**
 * @swagger
 * /client/:userId/requestform:
 *   post:
 *     summary: Создание заявки
 *     tags: [Requests]
 *     description: Создание заявки по форме.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               client_id:
 *                 type: integer
 *               petsitter_id:
 *                 type: integer
 *               service_type:
 *                  type: string
 *               start_time:
 *                 type: date
 *               end_time:
 *                 type: date
 *               animal_id:
 *                  type: integer
 *     responses:
 *       200:
 *         description: Успешный ввод.
 *       401:
 *         description: Неверные ввод.
 *       500:
 *         description: Внутренняя ошибка сервера.
 */
router.post('/client/:userId/requestform', requestController.create);

module.exports = router;