const validateUser = require("../middleware/users");
const userService = require("../services/users");
const passport = require("../passport-config");
const jwt = require("jsonwebtoken");
const { UserScheme } = require("../schemes/users")

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
            const validationResult = UserScheme.validate({
                login,
                password,
                first_name,
                last_name,
                address,
                phone,
                role_id,
            });

            if (validationResult.error) {
                return res.status(400).json({
                    error: 'Логин или пароль меньше 4 символов',
                });
            }

            const existingUser = await userService.getUserByLogin(login);

            if (existingUser) {
                return res.status(400).json({
                    error: 'Пользователь с таким логином уже существует',
                });
            }
            const user = await userService.registration(login, password, first_name, last_name, address, phone, role_id);
            console.log('Пользователь успешно создан:', user);
            const token = jwt.sign({
                id: user.id
            }, 'headerbearer', { expiresIn: '1h' });

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

    async getUserById(req, res) {
        const userId = req.params.userId;
        try {
          const user = await userService.getUserById(userId);
      
          if (user) {
            // Если пользователь найден, возвращаем его данные
            res.json(user);
          } else {
            // Если пользователь не найден, возвращаем ошибку 404 с сообщением
            res.status(404).json({ error: 'Пользователь не найден' });
          }
        } catch (error) {
          console.error('Ошибка при запросе данных пользователя:', error);
          res.status(500).json({ error: 'Ошибка на сервере' });
        }
      }
      
    
    
}


module.exports = new UserController();
