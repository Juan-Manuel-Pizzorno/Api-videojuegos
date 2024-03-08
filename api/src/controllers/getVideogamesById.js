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
        platforms,
        background_image,
        genres,
        released,
        rating,
      } = response.data;

      // Creo un filtro solo para quedarme con lo que necesito ya que el objeto posee varias propiedades, solo necesto las plataformas
      const plataformsName = platforms.map(platforms => {
        return {
          name: platforms.platform.name,
        };
      });
      

      // Creo un filtro solo para quedarme con lo que necesito ya que el objeto posee varias propiedades,
      // solo necesto el nombre de los generos y luego le aplico el .join para separarlo por "",""
      
      const genreNames = genres.map(genre => genre.name).join(", ");
      

      const videogame = {
        id, // Asignar un nuevo ID local incremental
        name,
        description,
        platforms:plataformsName,
        background_image: background_image, // Usar la URL de la imagen del juego
        genres:genreNames,
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
