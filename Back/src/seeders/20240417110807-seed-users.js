'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'victoria',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'renata',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'domingo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'rodrigo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
