const axios = require('axios');
require('dotenv').config();

const { Genres } = require('../db'); // Asegúrate de importar el modelo correcto

const API_KEY = process.env.API_KEY;
const URL = 'https://api.rawg.io/api/games';

const getVideogames = async (req, res) => {
  try {
    const response = await axios.get(`${URL}?key=${API_KEY}`);
    
    const videogames = response.data.results;

    const videoArray = videogames.map((videogame) => {

      const {id,name,description,platforms,image,released,rating} = videogame;

    

      return {
        id,name,description,platforms,image,released,rating
      };
    });

    return res.status(200).json(videoArray);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getVideogames,
};