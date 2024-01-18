const UserRepository = require("../repositories/users");

class UserService {
    async registration(login, password, first_name, last_name, address, phone, role_id){
        return await UserRepository.registration(login, password, first_name, last_name, address, phone, role_id);
    }

    async login(login, password){
        return await UserRepository.login(login, password);
    }
}

module.exports = new UserService();
