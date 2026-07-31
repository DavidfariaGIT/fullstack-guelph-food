import { getRestaurants } from "./getRestaurants.js";
import { renderRestaurants } from "./renderRestaurants.js";
import { getFilters } from "./getFilters.js";
import { filterRestaurants } from "./filterRestaurants.js";



async function init() {
    const restaurants = await getRestaurants() 
    renderRestaurants(restaurants)
    getFilters()
}

init()

const select = document.getElementById('rest-type')
select.addEventListener('change', (e) => {
    const filter = e.target.value  
    filterRestaurants(filter)
})
