const router = require('express').Router();
const articlesController = require('../controllers/articles-controller');

router.route("/").get(articlesController.index)

module.exports = router;