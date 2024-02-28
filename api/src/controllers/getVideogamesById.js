const { Videogames, Genres } = require('../db');
const axios = require("axios");
require('dotenv').config(); // Cargar las variables de entorno

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
        attributes: ['name'],
        through: { attributes: [] },
      },
    });

    if (videogameInDB) {
      res.status(200).json(videogameInDB);
    } else {
      const response = await axios.get(`${URL}${id}?key=${API_KEY}`);

      const { name, description, platforms, image, released, rating } = response.data;
    
      const videogame = {
        id, // Asignar un nuevo ID local incremental
        name,
        description,
        platforms,
        image,
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