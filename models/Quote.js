const quote = (sequelize, DataTypes) => { 
  
    const Quote = sequelize.define("Quote", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return Quote;
  }; 


module.exports = quote
  