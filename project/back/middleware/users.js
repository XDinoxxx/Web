// middleware/users.js
const jwt = require('jsonwebtoken');

function validateUser(req, res, next) {
    // Проверка наличия заголовка authorization в запросе
    if (!req.headers || !req.headers.authorization) {
        return res.status(401).json({
            error: 'Отсутствует токен аутентификации',
        });
    }

    const token = req.headers.authorization;

    try {
        // Проверка типа токена
        if (!token.startsWith('Bearer ')) {
            throw new Error('Неверный формат токена');
        }

        // Извлечение токена без 'Bearer '
        const decoded = jwt.verify(token.substring(7), 'headerbearer');
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
