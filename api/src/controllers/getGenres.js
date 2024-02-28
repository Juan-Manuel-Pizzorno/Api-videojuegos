const axios = require('axios');
require('dotenv').config();

const { Genres } = require('../db');

const API_KEY = process.env.API_KEY;
const URL = 'https://api.rawg.io/api/genres';

const getGenres = async (req, res) => {
  try {
    const response = await axios.get(`${URL}?key=${API_KEY}`);
    const genres = response.data.results;

    // No es necesario dividir el género ya que ya obtienes un objeto de géneros

    const tempArray = genres.map((genre) => genre.name);
    const uniqueGenres = [...new Set(tempArray)]; // Elimina duplicados

    // Crea o encuentra cada género en la base de datos
    await Promise.all(uniqueGenres.map(async (gen) => {
      await Genres.findOrCreate({
        where: { name: gen },
        defaults: { name: gen },
      });
    }));

    res.status(200).json(uniqueGenres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getGenres,
};
