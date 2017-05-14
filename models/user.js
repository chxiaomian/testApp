/**
 * Created by chxiaomian on 2017/5/14.
 */

var mongodb = require("./mongodb");

var userSchema = new mongodb.mongoose.Schema({
    userId: Number,
    username: String
});

var User = mongodb.mongoose.model("User", userSchema);

var UserDAO = function () {
};

UserDAO.prototype.save = function (obj, callback) {
    var instance = new User(obj);
    instance.save(function (err) {
        callback(err);
    });
};

UserDAO.prototype.findByName = function(name, callback) {
    User.findOne({username:name}, function(err, obj){
        callback(err, obj);
    });
};

module.exports = new UserDAO();