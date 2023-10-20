// this function will return the products based on the parameters we pass;
import { faker } from '@faker-js/faker';

export const getLatestTrends = () =>{
    
    const productList  = [];
    // let l = ratings.length();
    //generate 5 data copies store in array and return the array;
    for(let i=0; i<5; i++){
        const product = {
            name : faker.commerce.productName(),
            price : faker.commerce.price({ min: 100, max: 3000, dec: 0 }),
        
            rating:Math.floor(5*Math.random()) + 1,
            review : Math.floor(500*Math.random()) + 1,
            image : Math.floor(12*Math.random()) + 1
        }
        productList.push(product);
    }

    return productList;
    
}