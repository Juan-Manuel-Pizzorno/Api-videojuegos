const { Videogames, Genres } = require("../db");
const axios = require("axios");
const cheerio = require('cheerio');
require("dotenv").config();

const API_KEY = process.env.API_KEY;
const URL = `https://api.rawg.io/api/games/`;

const getVideogamesById = async (req, res) => {
  try {
    const id = req.params.idVideogame;

    const videogameInDB = await Videogames.findOne({
      where: { id: id },
      include: {
        model: Genres,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });

    if (videogameInDB) {
      res.status(200).json(videogameInDB);
    } else {
      const response = await axios.get(`${URL}${id}?key=${API_KEY}`);

      const {
        name,
        description,
        platforms,
        background_image,
        genres,
        released,
        rating,
      } = response.data;

      //Desde la API me viene la descripcion con etiquetas HTML con esto las limpia
      const applyHtmlProperties = (htmlString) => {
        const $ = cheerio.load(htmlString);
        return $.text();
      };

      //Paso la description del juego por la funcion de eliminar etiquetas html
      const htmlWithProperties = applyHtmlProperties(description);

      
      
      //Aplico filtros para quedarme con las propiedades que solo necesito mostrar desde la API,
      //en este caso solo me interesan los generos de los juegos y las plataformas
      const platformNames = platforms.map((platform) => platform.platform.name).join(", ");
      const genreNames = genres.map((genre) => genre.name).join(", ");

      const videogame = {
        id,
        name,
        description: htmlWithProperties,
        platforms: platformNames,
        background_image: background_image,
        genres: genreNames,
        released,
        rating,
      };

      res.status(200).json(videogame);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getVideogamesById,
};
