'use strict';
module.exports = function(app) {
  var articlesList = require('../controllers/articlesController');


  app.route('/articles')
    .get(articlesList.list_all_articles)
    .post(articlesList.create_an_article);
    

  app.route('/articles/:articleId')
    .get(articlesList.read_an_article)
    .put(articlesList.update_an_article)
    .delete(articlesList.delete_an_article);

};
