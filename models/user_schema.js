var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const format = require("node.date-time");
var mongooseUniqueValidator = require('mongoose-unique-validator');
var validate = require('mongoose-validator');


var user = new Schema({
    _id: {
      type: String,
      required: true
    },
    api: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      default : null
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    mobile: {
      type: Number,
      required: true
    },
    dateOfReg: {
      type: String,
      default: new Date().format("Y-MM-dd HH:mm:SS")
    },
    createdIpAddress: {
      type: String,
      required: true
    },
    accType: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    },
    lastLogin: [{
      type: String,
      default: null
    }],
    loginIpAddress: [{
      type: String,
      default: null
    }]
})

//to validate and send err if value is not unique
user.plugin(mongooseUniqueValidator);

//export models
module.exports = mongoose.model('userdetails',user)
//module.exports = UserDetail;
