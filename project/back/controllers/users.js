const userService = require("../services/users");

class UserController {
    async login(req, res) {
        const { login, password } = req.body;

        try {
            const user = await userService.login(login, password);
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
    }

    async registration(req, res) {
        const { login, password, first_name, last_name, address, phone, role_id } = req.body;

        try {
            if (!login || !password || !first_name || !last_name || !address || !phone || !role_id) {
                throw new Error('Все поля должны быть заполнены');
            }
            const user = await userService.registration(login, password, first_name, last_name, address, phone, role_id);
            console.log('Пользователь успешно создан:', user);
        } catch (error) {
            console.error('Ошибка при запросе к базе данных: ', error);
            res.status(500).json({
                error: 'Ошибка на стороне сервера',
            });
        }
    }
}

module.exports = new UserController();
