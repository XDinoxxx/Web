const Users = require("../models/users");

class UserRepository{
    async login(login, password) {
        return await Users.findOne({
            where: {
                login: login,
                password: password,
            },
        });
    }

    async registration(login, password, first_name, last_name, address, phone, role_id){
        return await Users.create({
            login: login,
            password: password,
            first_name: first_name,
            last_name: last_name,
            address: address,
            phone: phone,
            role_id: role_id,
        });
    }
}

module.exports = new UserRepository();