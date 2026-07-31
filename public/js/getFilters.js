
export async function getFilters() {
    const res = await fetch('/api/restaurants/type')
    const types = await res.json()
    const select = document.getElementById('rest-type')

    types.forEach((type) => {
        const optionEL = document.createElement('option')
        optionEL.value = type
        optionEL.textContent = type
        select.appendChild(optionEL)
    })
}