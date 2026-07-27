
export function renderRestaurants(restaurants) {
console.log(restaurants)
const restContainer = document.getElementById('rest-wrapper')
   const cards = restaurants.map((rest) => {
   return `
    <div>
    <img src=${rest.image}/>
    <h3>${rest.name}</h3>
    <p>${rest.location}</p>
    <p>type: ${rest.type}</p>
    <p>price: ${rest.price}</p> 
    </div>
    `
   }).join('')

   restContainer.innerHTML = cards
}