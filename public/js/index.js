import { getRestaurants } from "./getRestaurants.js";
import { renderRestaurants } from "./renderRestaurants.js";
import { getFilters } from "./getFilters.js";
import { filterRestaurants } from "./filterRestaurants.js";
import { checkAuth, renderGreet, renderLogout } from "./authUI.js";
import { logout } from "./logout.js";

const btnEl = document.getElementById('log-in-btn')
const logoutEl = document.getElementById('logout-btn')

async function init() {
  const restaurants = await getRestaurants();
  renderRestaurants(restaurants);
  getFilters();
  const name = await checkAuth()
  renderGreet(name)
  renderLogout(name)
}

init();

const select = document.getElementById("rest-type");
select.addEventListener("change", async (e) => {
  const filter = e.target.value;
  const filteredRest = await filterRestaurants(filter ? { filter } : {});
  renderRestaurants(filteredRest)
});

logoutEl.addEventListener('click', logout)