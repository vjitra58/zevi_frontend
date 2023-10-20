import { faker } from '@faker-js/faker';

export const getPopularSuggestions = () =>{
    
    const suggestion  = [];
    // let l = ratings.length();
    //generate 5 data copies store in array and return the array;
    for(let i=0; i<4; i++){
        let name = faker.commerce.productName();
        suggestion.push(name);
    }

    return suggestion;
    
}