const {Videogames, Genres} = require('../db');

const postVideogames = async (req, res) => {
  try {
    const { id, name, description, platforms, image, released, rating, genres } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'The "id" field is required.' });
    }

    const videogame = await Videogames.create({id, name, description, platforms, image, released, rating});

    if (genres && genres.length > 0) {
      const genresDB = await Genres.findAll({ where: { name: genres } });
      await videogame.setGenres(genresDB);
    }

    console.log(genres)

    res.status(200).json(videogame);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  postVideogames,
};
