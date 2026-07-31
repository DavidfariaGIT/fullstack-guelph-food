
export async function getRestaurants() {
    const res = await fetch(`/api`);
    const data = await res.json();
    return data;
}
