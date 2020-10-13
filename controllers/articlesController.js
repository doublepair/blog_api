'use strict';


var mongoose = require('mongoose'),
  Article = mongoose.model("Articles");



  
exports.list_all_articles = function(req, res) {
  var query = req.query;
  console.log("query",query);
  Article.find(query, function(err, articles) {
    if (err)
      res.send(err);
    res.json(articles);
  });
};




exports.create_an_article = function(req, res) {
  var new_article = new Article(req.body);
  new_article.save(function(err, articles) {
    if (err)
      res.send(err);
    res.json(articles);
  });
};


exports.read_an_article = function(req, res) {
  Article.findById(req.params.articleId, function(err, articles) {
    if (err)
      res.send(err);
    res.json(articles);
  });
};


exports.update_an_article = function(req, res) {
  Article.findOneAndUpdate({_id: req.params.articleId}, req.body, {new: true}, function(err, articles) {
    if (err)
      res.send(err);
    res.json(articles);
  });
};


exports.delete_an_article = function(req, res) {


  Article.remove({
    _id: req.params.articleId
  }, function(err, articles) {
    if (err)
      res.send(err);
    res.json({ message: 'articolo rimosso' });
  });
}


