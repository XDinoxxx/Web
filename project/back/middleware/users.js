const jwt = require('jsonwebtoken');
const { userScheme } = require('../schemes/users');

function validateUser(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            error: 'Отсутствует токен аутентификации',
        });
    }

    try {
        const decoded = jwt.verify(token, 'headerbearer');
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Ошибка при верификации токена: ', error);
        return res.status(401).json({
            error: 'Неверный токен аутентификации',
        });
    }
}

module.exports = validateUser;
