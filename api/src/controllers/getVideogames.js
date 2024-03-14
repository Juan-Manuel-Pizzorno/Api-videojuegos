const axios = require("axios");
require("dotenv").config();

const { Genres } = require("../db"); // Asegúrate de importar el modelo correcto

const API_KEY = process.env.API_KEY;
let URL = `https://api.rawg.io/api/games?key=${API_KEY}`;

let videoArray = [];

let videogames = [];

const getVideogames = async (req, res) => {
  try {
    //Tengo que traer 100 juegos de la api
    while (videoArray.length < 100 && URL) {
      let response = await axios.get(URL);
      //Guardo en videogames lo que me traigo de la api, en este cado todos los videogames
      //ya que en la API los results es donde estan los datos de c/ juego.
      const { results, next } = response.data;
      console.log(results);
      videoArray = [...videoArray, ...results];

      //Aqui guardo la constante para ir a la siguiente página ya que cada página tiene 20 juegos solamente
      URL = next;
    }

    videogames = videoArray.map((videogame) => {
      //Desestructuro los datos de la API que necesecito en cada item, tal cual viene de la Api
      const { id, name, background_image, genres } = videogame;
      //Realizo un mapeo para sacar los generos de cada juego ya que es una propiedad del objeto
      const genreNames = genres.map((genre) => genre.name).join(", ");

      return {
        id,
        name,
        background_image,
        genreNames, //luego con este nombre tengo que llarmo desde el front
      };
    });
    console.log(videoArray.length);
    return res.status(200).json(videoArray);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getVideogames,
};
