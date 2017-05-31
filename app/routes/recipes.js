var express = require('express');
var router = express.Router();

router.get('/recipes', function(req, res) {
  res.render('recipe', {
    pageTitle: 'Recipe',
    pageID: 'recipe'
  });

});

router.post('/recipes', function(req, res) {
  console.log(req.body);
});

module.exports = router;
