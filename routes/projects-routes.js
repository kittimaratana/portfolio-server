const router = require('express').Router();
const projectsController = require('../controllers/projects-controller.js');

router.route("/").get(projectsController.index)

module.exports = router;