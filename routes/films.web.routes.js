const filmsWebController = require('../controllers/films.web.controllers');
const router = require('express').Router();

router.get("/", filmsWebController.getHome);
router.post("/film", filmsWebController.createFilm);

module.exports = router;