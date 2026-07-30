
export function renderRestaurants(restaurants) {
console.log(restaurants)
const restContainer = document.getElementById('rest-wrapper')
   const cards = restaurants.map((rest) => {
   return `
    <div class="rest-card">
    <img class="rest-img" src=./images/${rest.image}>
    <div class="rest-info">
    <h3>${rest.name}</h3>
    <p>${rest.location}</p>
    <p>Type: ${rest.type}</p>
    <p>Price: ${rest.price}</p> 
    </div>
    </div>
    `
   }).join('')

   restContainer.innerHTML = cards
}