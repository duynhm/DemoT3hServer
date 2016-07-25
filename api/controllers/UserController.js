/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var base = require('../controllers/Base')

module.exports = _.merge({}, base, {
    login: function (req, res){
  var arrReturn = {
            code: 0,
            msg: 'Unknown',
            data: {}
        };
        return res.json(arrReturn);
    }
});

