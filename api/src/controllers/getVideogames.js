const axios = require("axios");
require("dotenv").config();

const { Genres } = require("../db"); // Asegúrate de importar el modelo correcto

const API_KEY = process.env.API_KEY;
let URL = `https://api.rawg.io/api/games?key=${API_KEY}`;

let videoArray = [];

let videogames = [];

const getVideogames = async (req, res) => {
  try {
    //Tengo que traer 100 juegos de la API asi que realizo un while xq traigo 20 por pagina nomás
    while (videoArray.length < 100 && URL) {
      let response = await axios.get(URL);
      //desestructuro la response de la api en 2 partes: results donde estaran todos los datos de los juegos
      //y en next, donde estará el dato para pasar a la siguiente página y trae los siguientes 20 juegos
      //results y next son los nombres que tienen los valores en la página de la API
      const { results, next } = response.data;

      //Al array videoArray le guardo los datos de la API(results) a lo que tenia antes en el array
      //videoArray(...videoArray)
      videoArray = [...videoArray, ...results];

      //Aqui guardo la constante para ir a la siguiente página ya que cada página tiene 20 juegos solamente
      URL = next;
    }
    //luego de guardar toda la información en videoArray, desestructuro en partes el mismo y lo guardo en 
    //otro array videogames
    videogames = videoArray.map((videogame) => {
      //Desestructuro los datos de la API que necesecito en cada item, tal cual viene de la Api
      const { id, name, background_image, genres } = videogame;
      //Realizo un mapeo para sacar los generos de cada juego ya que es una propiedad del objeto
      const genreNames = genres.map((genre) => genre.name).join(", ");

      return {
        id,
        name,
        background_image,
        genreNames, //luego con este nombre tengo que llamarlo desde el front
      };
    });
    //console.log(videoArray.length);
    return res.status(200).json(videogames);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getVideogames,
};
