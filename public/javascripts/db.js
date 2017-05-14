/**
 * Created by Sean on 2017/5/14.
 */


var mongoose = require('mongoose');

module.exports = function () {
    var db = mongoose.connect('mongodb://localhost/zhang');
    require("../../models/user.js");
    return db.collection;
}
