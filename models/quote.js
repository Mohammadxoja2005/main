module.exports = (sequelize, DataTypes) => {
  const quote = sequelize.define("quote", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return quote;
};
