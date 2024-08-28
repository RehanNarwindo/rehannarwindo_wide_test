const { where } = require("sequelize");
const { User } = require("../models/index");
const { generateToken } = require("../helpers/jwt");

class UserController {
    static async register(req, res, next) {
        console.log("masuk register");

        try {
            const { name, password, address } = req.body;
            if (!name) {
                throw { name: "NameRequired" };
            }
            if (!password) {
                throw { name: "PasswordRequired" };
            }
            if (!address) {
                throw { name: "AddressRequired" };
            }
            const data = await User.create({
                name,
                password,
                address,
            });
            console.log(data);
            res.status(201).json({
                id: data.id,
                name: data.name,
                address: data.address,
            });
        } catch (error) {
            next(error);
        }
    }
    static async login(req, res, next) {
        console.log("masuk login");
        try {
            let { name, password } = req.body;
            if (!name) {
                throw { name: "NameRequired" };
            }
            if (!password) {
                throw { name: "PasswordRequired" };
            }
            const user = await User.findOne({
                where: {
                    name: name,
                },
            });
            if (!user) {
                throw { name: "NameOrPasswordInvalid" };
            }
            if (password !== user.password) {
                throw { name: "NameOrPasswordInvalid" };
            }
            const data = {
                id: user.id,
                name: user.name,
            };

            const access_token = generateToken(data);
            // console.log(access_token);
            console.log("berhasil login");

            res.status(200).json({ access_token });
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    }
}

module.exports = UserController;
