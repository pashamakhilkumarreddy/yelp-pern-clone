module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
    },
  }, {
    timestamps: true,
  });

  return Restaurant;
};
