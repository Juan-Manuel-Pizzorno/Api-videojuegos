const { Router } = require('express');
const {getVideogames} = require('../controllers/getVideogames');
const {getVideogamesById} = require('../controllers/getVideogamesById');
const {getVideogamesByName} = require('../controllers/getVideogamesByName');
const {getGenres} = require('../controllers/getGenres');
const {postVideogames} = require('../controllers/postVideogames');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.get("/videogames", getVideogames);
router.get("/videogames/name", getVideogamesByName);
router.get("/videogames/:idVideogame", getVideogamesById);
router.get("/genres", getGenres);
router.post("/videogames", postVideogames);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
