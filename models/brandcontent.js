'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brandContent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.brandContent.belongsTo(models.brand)
      models.brandContent.belongsToMany(models.user, {through:'save'})
    }
  };
  brandContent.init({
    image: DataTypes.TEXT,
    brandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'brandContent',
  });
  return brandContent;
};