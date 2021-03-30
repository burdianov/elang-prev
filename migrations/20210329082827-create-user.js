'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have a name' },
          notEmpty: { msg: 'Name must not be empty' }
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'User must have an email' },
          notEmpty: { msg: 'Email must not be empty' },
          isEmail: { msg: 'Invalid email' }
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Password must not be empty' },
          notEmpty: { msg: 'Password must not be empty' }
        }
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'user',
        validate: {
          notNull: { msg: 'User must have a role' },
          notEmpty: { msg: 'Role must not be empty' }
        }
      },
      avatar: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
