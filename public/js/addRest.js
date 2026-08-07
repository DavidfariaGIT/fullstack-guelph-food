import { getRestaurants } from "./getRestaurants.js";

export default async function addRestaurant() {
  const restFormEl = document.querySelector(".add-rest-form");
  const addBtn = document.querySelector(".add-btn");
  addBtn.disabled = true;
  restFormEl.style.display = "flex";

  restFormEl.addEventListener("submit", async (e) => {
    e.preventDefault()
    
    const formData = new FormData(restFormEl);

    const name = formData.get("name").trim();
    const address = formData.get("address").trim();
    const type = formData.get("type").trim();
    const price = formData.get("price").trim();

    try {
      const res = await fetch("api/restaurants/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, address, type, price }),
      });

      if (!res.ok) {
        console.log("error fetching", res.status);
      }

      const data = await res.json();
      getRestaurants()

      restFormEl.style.display = "none"
      addBtn.disabled = false
      
    } catch (err) {
      console.log("error adding restaurant", err);
    }
  });
}
