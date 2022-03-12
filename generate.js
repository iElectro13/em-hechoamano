module.exports = function () {
    const { faker } = require('@faker-js/faker');
    const _ = require('lodash');
    return ({
        products: _.times(30, function (n) {


            return {
                id: faker.datatype.uuid(),
                name: faker.commerce.product(),
                category: faker.helpers.randomize(["gorros", "bufandas", "ponchos"]),
                price: faker.commerce.price(),
                description: faker.commerce.productDescription(),
                stock: faker.datatype.number({ 'min': 0, 'max': 8 }),
                image: faker.helpers.randomize(["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.GZB_i_Th7mCG4z2zNSxFRQHaHa%26pid%3DApi&f=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.handcraftedchile.com%2Fwp-content%2Fuploads%2F2017%2F04%2Fbufanda_calipso_modelo2_scarf.jpg&f=1&nofb=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ZKNHuloe5dYczPUyucjR1AHaJ3%26pid%3DApi&f=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ZKNHuloe5dYczPUyucjR1AHaJ3%26pid%3DApi&f=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.S7Ld7Z55y6-hpIGL-dVNdQHaLH%26pid%3DApi&f=1", "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F_HM5pEKjn0SU%2FSw30u0f_dOI%2FAAAAAAAAAU4%2F47LVk-TQmEA%2Fs1600%2Fponcho%2Bcon%2Bochos%2B01.jpg&f=1&nofb=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mantasdegrazalema.com%2F2135-large_default%2Fponcho-royal.jpg&f=1&nofb=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F11233004%2Fr%2Fil%2F2718ff%2F1050359106%2Fil_794xN.1050359106_o9xt.jpg&f=1&nofb=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lamamita.es%2Fupload%2Fponcho-enfant-en-alpaga-beige-santana.jpg&f=1&nofb=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.etsystatic.com%2F111%2F0%2F8503025%2Fil_fullxfull.933494101_hdjz.jpg&f=1&nofb=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmadeheart.com%2Fmedia%2Fproductphoto%2F579%2F46363087%2F1_17_DSC_0258.jpg&f=1&nofb=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpuntoamano.com%2Fmedia%2Fimg_20180928_123553-e1538584345738.jpg&f=1&nofb=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.digitalsport.com.ar%2Ffiles%2Fproducts%2F5a27d77865a3d-450223-1200x1200.jpg&f=1&nofb=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.IgZlhrsrk1RgVddlTohizAHaJl%26pid%3DApi&f=1"])
            }

        })
    })
}