export async function filterRestaurants(filters = {}) {
  const queryParams = new URLSearchParams(filters);
  const res = await fetch(`/api/restaurants?${queryParams}`);
  return await res.json();

}
