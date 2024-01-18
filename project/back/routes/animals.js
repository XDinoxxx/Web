const express = require("express");
const animalController = require("../controllers/animals");

const router = express.Router();

router.post('/client/:userId/animalform', animalController.create);
router.get('/client/:userId', animalController.list);

module.exports = router;