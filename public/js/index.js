import { getRestaruants } from "./getRestaurants.js";

async function init() {
    const restaurants = await getRestaruants()  
}

init()