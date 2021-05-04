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
    },
    {
      image: 'https://assets.vogue.com/photos/6044ed942d4011aa485f4348/master/pass/00019-THOM-BROWNE-RTW-Fall-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/6044ed5ea00f224cb04dce48/master/pass/00018-THOM-BROWNE-RTW-Fall-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/6044ed27902e2243365fe159/master/pass/00020-THOM-BROWNE-RTW-Fall-21.jpg',
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
      image: 'https://assets.vogue.com/photos/6012d463d056dd15bb873224/master/pass/00020-JUNYA-WATANABE-MENSWEAR-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/6012d42bca8e7b2b40eab324/master/pass/00019-JUNYA-WATANABE-MENSWEAR-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/6012d4491be8efd0d5dbd8cf/master/pass/00017-JUNYA-WATANABE-MENSWEAR-FALL-21.jpg',
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
      image: 'https://assets.vogue.com/photos/605b61805cd7c14dd841bd58/master/pass/00051-RAF-SIMONS-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/605b617d6d7f11cb122bb55f/master/pass/00050-RAF-SIMONS-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/605b617c5cd7c14dd841bd56/master/pass/00049-RAF-SIMONS-FALL-21.jpg',
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
      image: 'https://assets.vogue.com/photos/6011280989dd0d7d52ee80e0/master/pass/00033-COMME-DES-GARCONS-HOMME-PLUS-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/60112813544affcb3e0c484b/master/pass/00032-COMME-DES-GARCONS-HOMME-PLUS-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/60112803a379d04a43367593/master/pass/00026-COMME-DES-GARCONS-HOMME-PLUS-FALL-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/601127de1be8efd0d5dbd86d/master/pass/00017-COMME-DES-GARCONS-HOMME-PLUS-FALL-21.jpg',
    }]
    
    const sacaiContents=
    [{
      image: 'https://assets.vogue.com/photos/603d9a3da1f023f5e51eb976/master/pass/00001-Sacai-Mens-Fall-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/603d9a3e2b4ed9246fc2c624/master/pass/00002-Sacai-Mens-Fall-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/603d9a4660a13a9beb2451d2/master/pass/00003-Sacai-Mens-Fall-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/603d9a3faf8aa2a70ef27cfe/master/pass/00004-Sacai-Mens-Fall-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/603d9a3fa1f023f5e51eb978/master/pass/00005-Sacai-Mens-Fall-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/603d9a402b4ed9246fc2c626/master/pass/00006-Sacai-Mens-Fall-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/603d9a41b5e8d9535a5b8e6e/master/pass/00007-Sacai-Mens-Fall-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/603d9a4451245db857c78788/master/pass/00010-Sacai-Mens-Fall-21.jpg',
    }]
    const sunneiContents=
    [{
      image: 'https://assets.vogue.com/photos/60040fbab65a217b967ed242/master/pass/00001-Sunnei-FW-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/60040fbed6c20d9f67433d1d/master/pass/00002-Sunnei-FW-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/60040fbbeb25bca6c9370fd4/master/pass/00003-Sunnei-FW-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/60040fbd2c9954192f686177/master/pass/00004-Sunnei-FW-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/60040fc07e071248ce1cb382/master/pass/00005-Sunnei-FW-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/60040fc0d22b8bf710fcd7d5/master/pass/00006-Sunnei-FW-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/60040fc871ddec1a3bc26059/master/pass/00012-Sunnei-FW-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/60040fd37e071248ce1cb387/master/pass/00020-Sunnei-FW-21.jpg',
    }]
    const chulContents=
    [{
      image: 'https://i.ibb.co/JjTJg60/10551556-10152199356506331-4863221187565517322-o.jpg',
    },
    {
      image: 'https://i.ibb.co/D84GVfZ/10496231-10152199356486331-1796509854001986209-o.jpg',
    },
    {
      image: 'https://i.ibb.co/71yH9mr/10572093-10152199356491331-8889494643783311203-o.jpg',
    },
    {
      image: 'https://i.ibb.co/BfpS4zF/10549699-10152199356581331-9203946350235344162-o.jpg',
    },
    {
      image: 'https://i.ibb.co/sKCDvQj/10540716-10152199356726331-1559941680984238767-o.jpg',
    },
    {
      image: 'https://i.ibb.co/qjMHJ19/10562470-10152199356831331-8834343702963845824-o.jpg',
    },
    {
      image: 'https://i.ibb.co/vmCJYYn/10483091-10152199356691331-5008883850982723369-o.jpg',
    },
    {
      image: 'https://i.ibb.co/KhW0BQw/10495823-10152199356686331-2521708088826087695-o.jpg',
    },
    {
      image: 'https://i.ibb.co/JFkjvH2/10604737-10152199356991331-5677364457979203490-o.jpg',
    },
    {
      image: 'https://i.ibb.co/YjDTMD5/10495702-10152199357026331-459219870875741977-o.jpg',
    },
    {
      image: 'https://i.ibb.co/j8jprTz/10497117-10152199357126331-1442277113557094863-o.jpg',
    },
    {
      image: 'https://i.ibb.co/VJf5WWc/IMG-0866.jpg',
    },
    {
      image: 'https://i.ibb.co/ySFBXH1/IMG-1512.jpg',
    },
    {
      image: 'https://i.ibb.co/ws38S4R/IMG-1514.jpg',
    },
    {
      image: 'https://i.ibb.co/SdfpjGj/IMG-1511.jpg',
    },
    {
      image: 'https://i.ibb.co/HzL9V3R/IMG-1844.jpg',
    }];
    const burberryContent=
    [{
      image: 'https://assets.vogue.com/photos/6033b293c6589a62fb6c5a71/master/pass/00001-Burberry-Fall-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/6033b273f2588b93dabf7ca1/master/pass/00003-Burberry-Fall-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/6033b218f2588b93dabf7c9d/master/pass/00004-Burberry-Fall-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/6033b2510a6b7990c15bf07a/master/pass/00006-Burberry-Fall-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/6033b233116512a7f1f27760/master/pass/00007-Burberry-Fall-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/6033b26d5f7baa46b67e0233/master/pass/00008-Burberry-Fall-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/6033b212f2588b93dabf7c9b/master/pass/00009-Burberry-Fall-21.jpg',
    },
    {
      image: 'https://assets.vogue.com/photos/6033b21ef0c6d60ee655f2f9/master/pass/00010-Burberry-Fall-21.jpg',
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

  

    const sacai = await models.brand.findOne({
      where:{
        name: 'Sacai'
      }
    })
    for (let i=0; i < sacaiContents.length; i++){
      await sacai.createBrandContent(sacaiContents[i])
    }
    
    const sunnei = await models.brand.findOne({
      where:{
        name: 'Sunnei'
      }
    })
    for (let i=0; i < sunneiContents.length; i++){
      await sunnei.createBrandContent(sunneiContents[i])
    }

    const chul = await models.brand.findOne({
      where:{
        name: 'Sungchul Park'
      }
    })
    for (let i=0; i < chulContents.length; i++){
      await chul.createBrandContent(chulContents[i])
    }

    const burberry = await models.brand.findOne({
      where:{
        name: 'Burberry'
      }
    })
    for (let i=0; i < burberryContent.length; i++){
      await burberry.createBrandContent(burberryContent[i])
    }

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('brandContents', null, {});
  }
};
