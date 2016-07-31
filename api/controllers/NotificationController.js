/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var base = require('../controllers/Base')

module.exports = _.merge({}, base, {

    getByID: function (req, res) {
        var data = {
            dHJ1bmcgdMOibSB0aW4gaOG7jWMgxJHhuqFpIGjhu41jIGtodG4: {

                1: { id: 1, title: "Học chuyên đề retrofit", content: "Chiều thứ 7, ngày 30/7/2016, tại trung tâm tin học KHTN tổ chức buổi chuyên đề android có chủ đề Retrofit & RxAndroid" },
                2: { id: 2, title: "Học chuyên đề binding data", content: "Chiều thứ 7, ngày 6/8/2016, tại trung tâm tin học KHTN tổ chức buổi chuyên đề android có chủ đề Binding data" },
                3: { id: 3, title: "Học chuyên đề mô hình MVVM", content: "Chiều thứ 7, ngày 13/8/2016, tại trung tâm tin học KHTN tổ chức buổi chuyên đề android có chủ đề Mô hình MVVM" }
            },
            Tmd1eeG7hW4gSHXhu7NuaCBNaW5oIER1eQ: {
                1: { id: 1, title: "Học chuyên đề retrofit", content: "Chiều thứ 7, ngày 30/7/2016, tại trung tâm tin học KHTN tổ chức buổi chuyên đề android có chủ đề Retrofit & RxAndroid" },
                2: { id: 2, title: "Học chuyên đề binding data", content: "Chiều thứ 7, ngày 6/8/2016, tại trung tâm tin học KHTN tổ chức buổi chuyên đề android có chủ đề Binding data" },
                3: { id: 3, title: "Học chuyên đề mô hình MVVM", content: "Chiều thứ 7, ngày 13/8/2016, tại trung tâm tin học KHTN tổ chức buổi chuyên đề android có chủ đề Mô hình MVVM" }
            }
        };

        var token = req.param("token");
        var id = req.param("id");

        var response = this.getBaseResponse();
        var notifications = data[token];
        if (notifications) {
            var notification = notifications[id];
            if (notification) {
                response.msg = "Success";
                response.status = 200;
                response.data = notification;
            }else{
                response.msg = "Không tìm thấy thông báo.";        
            }
        } else {
            response.msg = "Token không hợp lệ.";
        }
        return res.json(response);
    }

});

