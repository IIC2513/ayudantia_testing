'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Entries', [
      {
        title: 'Cumpleaños',
        body: 'Hoy cumplí 23 años',
        date: new Date(),
        belongs_to: 'victoria',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Año nuevo',
        body: 'Hoy es el primer día del 2024',
        date: new Date(),
        belongs_to: 'victoria',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Otoño',
        body: 'Ya comenzó el otoño',
        date: new Date(),
        belongs_to: 'renata',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ayudantía',
        body: 'Este semestre soy ayudante de Web',
        date: new Date(),
        belongs_to: 'domingo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Entries', null, {});
  }
};
