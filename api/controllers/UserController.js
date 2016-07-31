/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var base = require('../controllers/Base')

module.exports = _.merge({}, base, {

    login: function (req, res) {
        var data = {
            t3h: { password: "t3h", userID: 1, token: "dHJ1bmcgdMOibSB0aW4gaOG7jWMgxJHhuqFpIGjhu41jIGtodG4" },
            duynguyen: { password: "123", userID: 2, token: "Tmd1eeG7hW4gSHXhu7NuaCBNaW5oIER1eQ" }
        };
        var response = this.getBaseResponse();
        var userName = req.param("userName");
        var password = req.param("password");
        var user = data[userName];
        if (user) {
            if (user.password == password) {
                response.msg = "Success";
                response.status = 200;
                delete user.password;
                response.data = user;
            } else {
                response.msg = "Tài khoản hoặc mật khẩu không đúng.";
            }
        } else {
            response.msg = "Tài khoản hoặc mật khẩu không đúng.";
        }
        return res.json(response);
    },

    get: function (req, res) {
        var data = {
            dHJ1bmcgdMOibSB0aW4gaOG7jWMgxJHhuqFpIGjhu41jIGtodG4: { fullName: "t3h", email: "t3h@t3h.vn", userID: 1 },
            Tmd1eeG7hW4gSHXhu7NuaCBNaW5oIER1eQ: { fullName: "Nguyễn Huỳnh Minh Duy", email: "dzumihn@gmail.com", userID: 2 }
        };

        var token = req.param("token");
        var response = this.getBaseResponse();
        var user = data[token];
        if (user) {
            response.msg = "Success";
            response.status = 200;
            response.data = user;
        } else {
            response.msg = "Token không hợp lệ.";
        }
        return res.json(response);
    },
    get2: function (req, res) {
        var data = {
            dHJ1bmcgdMOibSB0aW4gaOG7jWMgxJHhuqFpIGjhu41jIGtodG4: { fullName: "t3h", email: "t3h@t3h.vn", userID: 1 },
            Tmd1eeG7hW4gSHXhu7NuaCBNaW5oIER1eQ: { fullName: "Nguyễn Huỳnh Minh Duy", email: "dzumihn@gmail.com", userID: 2 }
        };

        // var token = req.header.
        var response = this.getBaseResponse();
        var token = req.headers.token;
        var user = data[token];
        if (user) {
            response.msg = "Success";
            response.status = 200;
            response.data = user;
        } else {
            response.msg = "Token không hợp lệ.";
        }
        return res.json(response);
    }





});

