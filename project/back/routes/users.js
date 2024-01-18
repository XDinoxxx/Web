const express = require("express");
const userController = require("../controllers/users");

const router = express.Router();

router.post('/login',userController.login);
router.post('/registration', userController.registration);

module.exports = router;