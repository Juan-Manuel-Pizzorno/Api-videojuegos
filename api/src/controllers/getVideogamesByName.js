const { Videogames, Genres } = require('../db');
const axios = require("axios");
require('dotenv').config(); // Cargar las variables de entorno

const API_KEY = process.env.API_KEY;
const URL = `https://api.rawg.io/api/games`;


const getVideogamesByName = async (req, res) => {
  try {
    const { name } = req.query;
    
    
    // Buscar el videojuego en la base de datos
    const videogameInDB = await Videogames.findOne({
      where: { name },
      include: {
        model: Genres,
        attributes: ['name'],
        through: { attributes: [] },
      },
    });
 
    if (videogameInDB) {
      res.status(200).json(videogameInDB);
    } else {
      const response = await axios.get(`${URL}?search=${name}&key=${API_KEY}`);
    

      // Tomar el primer juego de la respuesta (puedes ajustarlo según tus necesidades)
      const firstGame = response.data.results[0];

      if (!firstGame) {
        return res.status(404).json({ message: 'Juego no encontrado' });
      }

      const { id, description, platforms, image, released, rating } = firstGame;

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
  getVideogamesByName,
};