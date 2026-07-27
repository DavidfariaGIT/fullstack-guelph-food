import { getRestaurants } from "./getRestaurants.js";
import { renderRestaurants } from "./renderRestaurants.js";

async function init() {
    const restaurants = await getRestaurants() 
    renderRestaurants(restaurants)
}

init()