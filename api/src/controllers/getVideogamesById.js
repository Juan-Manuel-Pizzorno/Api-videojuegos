const { Videogames, Genres } = require("../db");
const axios = require("axios");
require("dotenv").config(); // Cargar las variables de entorno

const API_KEY = process.env.API_KEY;
const URL = `https://api.rawg.io/api/games/`;

const getVideogamesById = async (req, res) => {
  try {
    const id = req.params.idVideogame;

    // Buscar el videojuego en la base de datos
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
        metacritic_platforms,
        background_image,
        genres,
        released,
        rating,
      } = response.data;

      
      const platforms = metacritic_platforms.map(platformData => {
        return {
          name: platformData.platform.name,
        };
      });

      const genreNames = genres.map(genre => genre.name); 
      const genresString = genreNames.join(", ");

      const videogame = {
        id, // Asignar un nuevo ID local incremental
        name,
        description,
        metacritic_platforms:platforms,
        background_image: background_image, // Usar la URL de la imagen del juego
        genres:genresString,
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
