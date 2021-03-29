'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    toJSON() {
      return { ...this.get(), password: undefined };
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have a name' },
          notEmpty: { msg: 'Name must not be empty' }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have an email' },
          notEmpty: { msg: 'Email must not be empty' },
          isEmail: { msg: 'Invalid email' }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Password must not be empty' },
          notEmpty: { msg: 'Password must not be empty' }
        }
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user',
        validate: {
          notNull: { msg: 'User must have a role' },
          notEmpty: { msg: 'Role must not be empty' }
        }
      },
      avatar: {
        type: DataTypes.STRING
      },
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      tableName: 'users',
      modelName: 'User'
    }
  );
  return User;
};
