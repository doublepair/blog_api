'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var articlesSchema = new Schema({

  title: {
    type: String,
    required: "inserire il titolo"
  },

  body: {
    type: String, 
    required: "inserire il corpo"
  },

  public: {
    type: Boolean,
    default: true
  }, 

  featured: {
    type: Boolean,
    default: false
  },

  tag: {
    type: [{
      type: [String]
    }],
    default: [""]
  }

});

module.exports = mongoose.model('Articles', articlesSchema);