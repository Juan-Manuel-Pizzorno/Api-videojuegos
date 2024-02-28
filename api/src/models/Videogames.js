const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogames', {
    id: {
      type: DataTypes.INTEGER, // Usamos UUID para IDs únicos
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, // Añadido para que sea autoincremental
      
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT, // Cambiado a TEXT para descripciones más largas
      allowNull: false,
    },
    platforms: {
      type: DataTypes.JSONB, // Usamos JSONB para almacenar datos JSON en PostgreSQL
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    released: {
      type: DataTypes.DATEONLY, // Cambiado a DATEONLY para almacenar solo la fecha sin la hora
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT, // Cambiado a FLOAT para almacenar la calificación correctamente
      allowNull: false,
    },
    
  },
 {
    timestamps: false
  });
};

