const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: flase
    }
  },
  {
    sequelize
  }
);

module.exports = Comment;
