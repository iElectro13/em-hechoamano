module.exports = function(){
    const {faker} = require('@faker-js/faker');
    const _ = require('lodash');
    return( {
        products : _.times(100, function(n){
            return {
                id: faker.datatype.uuid(),
                name: faker.commerce.product(),
                category: faker.helpers.randomize(["gorros", "bufandas", "ponchos"]),
                price: faker.commerce.price(),
                description: faker.commerce.productDescription(),
                stock: faker.datatype.number({'min':0, 'max':8}),
                image: faker.image.fashion()
            }
        })
    })
}