const UserScheme = require("../back/schemes/users");
const UserController = require("../back/controllers/users");
const UserService = require("../back/services/users");

const mockUserData = {
    login: 'testlogin',
    password: 'testpassword',
    first_name: 'test',
    last_name: 'user',
    address: 'test address',
    phone: 'test phone',
    role_id: 1
};

describe('User Registration', () => {
    it('should validate user registration data', () => {
        const { error } = UserScheme.validate(mockUserData);
        expect(error).toBeUndefined();
    });

    it('should create a new user', async () => {
        const createSpy = jest.spyOn(UserService, 'registration').mockResolvedValue(mockUserData);

        const req = { body: mockUserData };
        const res = { json: jest.fn() };

        await UserController.registration(req, res);

        // Check that UserService.create was called with the correct arguments
        expect(createSpy).toHaveBeenCalledWith(
            mockUserData.login,
            mockUserData.password,
            mockUserData.first_name,
            mockUserData.last_name,
            mockUserData.address,
            mockUserData.phone,
            mockUserData.role_id
        );

        // Check that res.json was called with the result of UserService.create
        expect(res.json).toHaveBeenCalledWith(mockUserData);

        // Restore the original implementation of UserService.create
        createSpy.mockRestore();
    });
});
