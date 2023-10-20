// this function will return the products based on the parameters we pass;
import { faker } from '@faker-js/faker';

export const getProducts = (ratings, priceRange) =>{
    let minPrice = 100, maxPrice = 10000;
    if(priceRange && priceRange.find((s) => s == "500") != undefined){
        maxPrice = 500;
    }
    if(priceRange && priceRange.find((s) => s == "1000-3000") != undefined){
        minPrice = 1000, maxPrice = 3000;
    }
    if(priceRange && priceRange.find((s) => s == "3000") != undefined){
        minPrice = 3000
    }
    
    const productList  = [];
    // let l = ratings.length();
    //generate 5 data copies store in array and return the array;
    for(let i=0; i<8; i++){
        const product = {
            name : faker.commerce.productName(),
            price : faker.commerce.price({ min: minPrice, max: maxPrice, dec: 0 }),
        
            rating:Math.floor(5*Math.random()) + 1,
            review : Math.floor(500*Math.random()) + 1,
            image : Math.floor(12*Math.random()) + 1
        }
        productList.push(product);
    }

    return productList;
    
}