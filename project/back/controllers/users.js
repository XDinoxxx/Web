const validateUser = require("../middleware/users");
const userService = require("../services/users");
const passport = require("../passport-config");
const jwt = require("jsonwebtoken");

class UserController {
    async login(req, res) {
        const { login, password } = req.body;

        try {
            const user = await userService.login(login, password);
            if (user) {
                const token = jwt.sign({
                    id: user.id,
                    role_id: user.role_id,
                }, 'headerbearer', { expiresIn: '1h' })
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
    }

    async registration(req, res) {
        const { login, password, first_name, last_name, address, phone, role_id } = req.body;
    
        try {
            await validateUser(req, res);
    
            const user = await userService.registration(login, password, first_name, last_name, address, phone, role_id);
            console.log('Пользователь успешно создан:', user);
            const token = jwt.sign({
                id: user.id
            }, 'headerbearer', 
            { expiresIn: '1h' }); // Замените на свой секретный ключ
            res.json({
                message: 'Пользователь успешно создан',
                token,
            });
        } catch (error) {
            console.error('Ошибка при запросе к базе данных: ', error);
            res.status(500).json({
                error: 'Ошибка на стороне сервера',
            });
        }
    }
    
}

module.exports = new UserController();
