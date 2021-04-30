'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('brands', [{
      name: 'Thom Browne',
      image: 'https://assets.vogue.com/photos/6044ed12b5d354f053c37b8c/master/pass/00003-THOM-BROWNE-RTW-Fall-21.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Junya Watanabe',
      image: 'https://assets.vogue.com/photos/6012d44fa95795a669cd383f/master/pass/00001-JUNYA-WATANABE-MENSWEAR-FALL-21.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Raf Simons',
      image: 'https://assets.vogue.com/photos/605b611a3ca2f9304f6f0b5c/master/pass/00002-RAF-SIMONS-FALL-21.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Comme des Garçons Homme Plus',
      image: 'https://assets.vogue.com/photos/6011279d384f281036b5bace/master/pass/00001-COMME-DES-GARCONS-HOMME-PLUS-FALL-21.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dior Men',
      image: 'https://assets.vogue.com/photos/600acf4bf46006afc0972416/master/pass/00001-DIOR-MENSWEAR-FALL-21.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('brands', null, {});
  }
};

//sequelize-cli seed:generate --name <table name you want to seed to>
//sequelize-cli db:seed:all
//sequelize-cli db:seed:undo:all
