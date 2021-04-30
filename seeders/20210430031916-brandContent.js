'use strict';
const models = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 1. Create an array that contains brandContents of a brand
    const thomBrowneContents =
   [{
      image: 'https://assets.vogue.com/photos/6044ed12b5d354f053c37b8c/master/pass/00003-THOM-BROWNE-RTW-Fall-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/6044ed69b5d354f053c37b8e/master/pass/00001-THOM-BROWNE-RTW-Fall-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/6044ed334c0172df0ee8b199/master/pass/00002-THOM-BROWNE-RTW-Fall-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/6044ed5643a886d2043e577a/master/pass/00004-THOM-BROWNE-RTW-Fall-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/6044ed884c0172df0ee8b19e/master/pass/00005-THOM-BROWNE-RTW-Fall-21.jpg',
    }]
    const junyaWatanabeContents =
    [{
      image: 'https://assets.vogue.com/photos/6012d44fa95795a669cd383f/master/pass/00001-JUNYA-WATANABE-MENSWEAR-FALL-21.jpg',
    }, 
    {
      image: 'https://assets.vogue.com/photos/6012d4685312e25a9789e6f5/master/pass/00003-JUNYA-WATANABE-MENSWEAR-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/6012d4206306ca9bc81048f7/master/pass/00004-JUNYA-WATANABE-MENSWEAR-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/6012d4110dd3a376b2c02290/master/pass/00006-JUNYA-WATANABE-MENSWEAR-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/6012d41bf454707f3266e274/master/pass/00008-JUNYA-WATANABE-MENSWEAR-FALL-21.jpg',
    }]
    const rafSimonsContents =
    [{
      image: 'https://assets.vogue.com/photos/605b611a3ca2f9304f6f0b5c/master/pass/00002-RAF-SIMONS-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/605b611f15ee3dfc8ba6f995/master/pass/00005-RAF-SIMONS-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/605b612e3ca2f9304f6f0b5e/master/pass/00015-RAF-SIMONS-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/605b6142fcace3ac4650f0a4/master/pass/00027-RAF-SIMONS-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/605b614a6d7f11cb122bb554/master/pass/00032-RAF-SIMONS-FALL-21.jpg',
    }]
    const cdgContents =
    [{
      image: 'https://assets.vogue.com/photos/6011279d384f281036b5bace/master/pass/00001-COMME-DES-GARCONS-HOMME-PLUS-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/601127c7a4963318eb81576e/master/pass/00002-COMME-DES-GARCONS-HOMME-PLUS-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/60112788d056dd15bb8731e3/master/pass/00003-COMME-DES-GARCONS-HOMME-PLUS-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/601128c3544affcb3e0c484d/master/pass/00004-COMME-DES-GARCONS-HOMME-PLUS-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/601127de1be8efd0d5dbd86d/master/pass/00017-COMME-DES-GARCONS-HOMME-PLUS-FALL-21.jpg',
    }]
    const diorMenContents=
    [{
      image: 'https://assets.vogue.com/photos/600acf4bf46006afc0972416/master/pass/00001-DIOR-MENSWEAR-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/600aceea446a835c136977f2/master/pass/00002-DIOR-MENSWEAR-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/600acf6fae9e25d4ea171a16/master/pass/00003-DIOR-MENSWEAR-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/600acec7a4912aa8fa35e25b/master/pass/00004-DIOR-MENSWEAR-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/600aced393122f62d3021a0c/master/pass/00005-DIOR-MENSWEAR-FALL-21.jpg',
    }];

    const thomBrowne = await models.brand.findOne({
      where:{
        name: 'Thom Browne'
      }
    // 2.find one brand 
    })
    for (let i=0; i < thomBrowneContents.length; i++){
      await thomBrowne.createBrandContent(thomBrowneContents[i])
    }
    //3. Loop through to create add brand contents to a brand. Association will fill the brandId in brandContents

    const junyaWatanabe = await models.brand.findOne({
      where:{
        name: 'Junya Watanabe'
      }
    })
    for (let i=0; i < junyaWatanabeContents.length; i++){
      await junyaWatanabe.createBrandContent(junyaWatanabeContents[i])
    }

    const rafSimons = await models.brand.findOne({
      where:{
        name: 'Raf Simons'
      }
    })
    for (let i=0; i < rafSimonsContents.length; i++){
      await rafSimons.createBrandContent(rafSimonsContents[i])
    }
    const cdg = await models.brand.findOne({
      where:{
        name: 'Comme des Garçons Homme Plus'
      }
    })
    for (let i=0; i < cdgContents.length; i++){
      await cdg.createBrandContent(cdgContents[i])
    }

    const diorMen = await models.brand.findOne({
      where:{
        name: 'Dior Men'
      }
    })
    for (let i=0; i < diorMenContents.length; i++){
      await diorMen.createBrandContent(diorMenContents[i])
    }
    

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('brandContents', null, {});
  }
};
