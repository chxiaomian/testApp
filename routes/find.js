/**
 * Created by Sean on 2017/5/14.
 */


var express = require('express');
var router = express.Router();

// require("../models/user")
//var db = require('../public/javascripts/db');
// var mongoose = require('mongoose');
// var user = mongoose.model('user');

var User = require("../models/user");

router.get('/', function (request, response, next) {
    var user = new User()
    {
        userId = 123;
        username = 'cheng xiao mian';
    }
    ;


    user.save(function (err) {
        console.log(user)
    })

    User.findByName("cheng xiao mian", function (err, doc) {
        if (err) {
            response.end('Error');
            return next();
        }
        response.json(doc);
    })

})

module.exports = router;